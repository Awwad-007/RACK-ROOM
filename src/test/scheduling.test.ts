import { describe, it, expect } from 'vitest';
import {
  hasIntervalOverlap,
  calculatePriorityScore,
  createQrToken,
  parseQrToken,
  getLocalResources,
  categoryForUnit,
} from '../lib/schedulingData';
import { MOCK_EQUIPMENT } from '../data/mock';

describe('Scheduling & Conflict Engine', () => {
  it('correctly detects overlapping intervals', () => {
    const existingStart = '2026-11-01T10:00:00.000Z';
    const existingEnd = '2026-11-01T12:00:00.000Z';

    // Overlapping: requested slot inside existing
    expect(
      hasIntervalOverlap(existingStart, existingEnd, '2026-11-01T10:30:00.000Z', '2026-11-01T11:30:00.000Z')
    ).toBe(true);

    // Overlapping: requested slot starts before and ends after
    expect(
      hasIntervalOverlap(existingStart, existingEnd, '2026-11-01T09:00:00.000Z', '2026-11-01T13:00:00.000Z')
    ).toBe(true);

    // Overlapping: requested slot overlaps start
    expect(
      hasIntervalOverlap(existingStart, existingEnd, '2026-11-01T09:00:00.000Z', '2026-11-01T10:30:00.000Z')
    ).toBe(true);

    // Overlapping: requested slot overlaps end
    expect(
      hasIntervalOverlap(existingStart, existingEnd, '2026-11-01T11:30:00.000Z', '2026-11-01T13:00:00.000Z')
    ).toBe(true);

    // Non-overlapping: completely before
    expect(
      hasIntervalOverlap(existingStart, existingEnd, '2026-11-01T08:00:00.000Z', '2026-11-01T10:00:00.000Z')
    ).toBe(false);

    // Non-overlapping: completely after
    expect(
      hasIntervalOverlap(existingStart, existingEnd, '2026-11-01T12:00:00.000Z', '2026-11-01T14:00:00.000Z')
    ).toBe(false);
  });

  it('calculates waitlist priority scores with weight, urgency, and penalties', () => {
    // Lab Admin (weight 30), urgency 5, penalty 0 => 30 + 60 = 90
    expect(calculatePriorityScore('Lab Admin', 5, 0)).toBe(90);

    // Student (weight 14), urgency 1, penalty 2 => 14 + 12 - 4 = 22
    expect(calculatePriorityScore('Student', 1, 2)).toBe(22);

    // Clamped at 100 max
    expect(calculatePriorityScore('Lab Admin', 10, 0)).toBe(100);

    // Clamped at 0 min
    expect(calculatePriorityScore('Student', 0, 50)).toBe(0);
  });

  it('generates and parses valid QR tokens', () => {
    const token = createQrToken('bk-123', 'eq-cam-01', '2026-11-01T10:00:00.000Z');
    expect(token).toBe('ZC|bk-123|eq-cam-01|2026-11-01T10:00:00.000Z');

    const parsed = parseQrToken(token);
    expect(parsed).toEqual({
      bookingId: 'bk-123',
      equipmentId: 'eq-cam-01',
      startAt: '2026-11-01T10:00:00.000Z',
    });

    expect(parseQrToken('INVALID|PAYLOAD')).toBeNull();
  });

  it('correctly maps equipment units and categories', () => {
    const resources = getLocalResources();
    expect(resources.length).toBeGreaterThan(0);

    const firstEquipment = Object.values(MOCK_EQUIPMENT)[0];
    const category = categoryForUnit(firstEquipment);
    expect(category).toBeDefined();
  });
});
