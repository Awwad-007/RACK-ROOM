import { describe, it, expect } from 'vitest';
import {
  hasIntervalClash,
  validateCheckInWindow,
  calculateWaitlistPriority,
  sortWaitlistQueue,
  PRE_BOOKING_GRACE_MS,
  CHECKIN_TIMEOUT_MS,
  WaitlistCandidate,
} from '../engine';

describe('Scheduling Core Engine (src/engine)', () => {
  describe('Interval Clash Detection', () => {
    const startA = '2026-11-01T10:00:00.000Z';
    const endA = '2026-11-01T12:00:00.000Z';

    it('identifies conflicting intervals correctly (startA < endB && endA > startB)', () => {
      // Overlap: entirely within
      expect(hasIntervalClash(startA, endA, '2026-11-01T10:30:00.000Z', '2026-11-01T11:30:00.000Z')).toBe(true);

      // Overlap: spanning across
      expect(hasIntervalClash(startA, endA, '2026-11-01T09:00:00.000Z', '2026-11-01T13:00:00.000Z')).toBe(true);

      // Overlap: start boundary
      expect(hasIntervalClash(startA, endA, '2026-11-01T09:30:00.000Z', '2026-11-01T10:30:00.000Z')).toBe(true);

      // Overlap: end boundary
      expect(hasIntervalClash(startA, endA, '2026-11-01T11:30:00.000Z', '2026-11-01T12:30:00.000Z')).toBe(true);
    });

    it('permits contiguous non-overlapping intervals (adjacent slots)', () => {
      // Immediately preceding: ends right when A starts
      expect(hasIntervalClash(startA, endA, '2026-11-01T08:00:00.000Z', '2026-11-01T10:00:00.000Z')).toBe(false);

      // Immediately succeeding: starts right when A ends
      expect(hasIntervalClash(startA, endA, '2026-11-01T12:00:00.000Z', '2026-11-01T14:00:00.000Z')).toBe(false);
    });
  });

  describe('Grace Window Management', () => {
    const scheduledStart = '2026-11-01T10:00:00.000Z';
    const startMs = new Date(scheduledStart).getTime();

    it('allows check-in within the [-10m, +15m] grace window', () => {
      // Exactly at -10 minutes
      const earlyValid = new Date(startMs - PRE_BOOKING_GRACE_MS).toISOString();
      expect(validateCheckInWindow(scheduledStart, earlyValid).valid).toBe(true);

      // At start time
      expect(validateCheckInWindow(scheduledStart, scheduledStart).valid).toBe(true);

      // At +15 minutes timeout threshold
      const timeoutBoundary = new Date(startMs + CHECKIN_TIMEOUT_MS).toISOString();
      expect(validateCheckInWindow(scheduledStart, timeoutBoundary).valid).toBe(true);
    });

    it('rejects check-in attempts that are too early or timed out', () => {
      // 11 minutes early (too early)
      const tooEarly = new Date(startMs - 11 * 60_000).toISOString();
      const earlyResult = validateCheckInWindow(scheduledStart, tooEarly);
      expect(earlyResult.valid).toBe(false);
      expect(earlyResult.status).toBe('too_early');

      // 16 minutes late (timed out)
      const timedOut = new Date(startMs + 16 * 60_000).toISOString();
      const lateResult = validateCheckInWindow(scheduledStart, timedOut);
      expect(lateResult.valid).toBe(false);
      expect(lateResult.status).toBe('timed_out');
    });
  });

  describe('Waitlist Priority Scoring & Queue Sorting', () => {
    it('computes multi-factor priority scores with clamping [0, 100]', () => {
      // Lab Admin (weight 30) + urgency 5 * 12 - penalty 0 = 90
      expect(calculateWaitlistPriority('Lab Admin', 5, 0)).toBe(90);

      // Student (weight 14) + urgency 1 * 12 - penalty 2 * 2 = 22
      expect(calculateWaitlistPriority('Student', 1, 2)).toBe(22);

      // Clamping upper bound
      expect(calculateWaitlistPriority('Faculty', 10, 0)).toBe(100);

      // Clamping lower bound
      expect(calculateWaitlistPriority('Student', 0, 50)).toBe(0);
    });

    it('sorts waitlist queue by score descending and breaks ties by FIFO timestamp', () => {
      const candidates: WaitlistCandidate[] = [
        { id: '1', role: 'Student', urgency: 1, requestedAt: '2026-11-01T10:00:00Z' }, // 14 + 12 = 26
        { id: '2', role: 'Lab Admin', urgency: 5, requestedAt: '2026-11-01T10:05:00Z' }, // 30 + 60 = 90
        { id: '3', role: 'Researcher', urgency: 3, requestedAt: '2026-11-01T09:00:00Z' }, // 24 + 36 = 60
        { id: '4', role: 'Student', urgency: 1, requestedAt: '2026-11-01T09:30:00Z' }, // 14 + 12 = 26 (Earlier than #1)
      ];

      const sorted = sortWaitlistQueue(candidates);
      expect(sorted.map((c) => c.id)).toEqual(['2', '3', '4', '1']);
    });
  });
});
