import { describe, it, expect } from 'vitest';
import {
  heatmapWindow,
  overlapHours,
  heatColorFor,
} from '../utils/usageHeatmap';
import { BookingRecord } from '../types/scheduling';

describe('Usage Heatmap Utilities', () => {
  it('computes correct heatmap date windows', () => {
    const todayWindow = heatmapWindow('today');
    expect(todayWindow.start.getTime()).toBeLessThan(todayWindow.end.getTime());

    const weekWindow = heatmapWindow('week');
    expect(weekWindow.start.getTime()).toBeLessThan(todayWindow.start.getTime());

    const monthWindow = heatmapWindow('month');
    expect(monthWindow.start.getTime()).toBeLessThan(weekWindow.start.getTime());
  });

  it('calculates overlap hours correctly', () => {
    const booking: BookingRecord = {
      id: 'bk-test',
      equipmentId: 'eq-1',
      equipmentName: 'DSLR Camera',
      unitId: 'CAM-01',
      category: 'DSLR Camera',
      buildingId: 'bldg-science',
      buildingName: 'Science Wing',
      requesterName: 'Test User',
      requesterRole: 'Student',
      startAt: '2026-11-01T10:00:00.000Z',
      endAt: '2026-11-01T14:00:00.000Z',
      status: 'confirmed',
      purpose: 'Lab Test',
      source: 'demo',
      qrToken: 'ZC|bk-test|eq-1|2026-11-01T10:00:00.000Z',
    };

    // Full 4 hours overlap
    const hours = overlapHours(
      booking,
      new Date('2026-11-01T08:00:00.000Z'),
      new Date('2026-11-01T16:00:00.000Z')
    );
    expect(hours).toBe(4);

    // Partial overlap (2 hours)
    const partialHours = overlapHours(
      booking,
      new Date('2026-11-01T12:00:00.000Z'),
      new Date('2026-11-01T16:00:00.000Z')
    );
    expect(partialHours).toBe(2);

    // Zero overlap
    const zeroHours = overlapHours(
      booking,
      new Date('2026-11-01T15:00:00.000Z'),
      new Date('2026-11-01T17:00:00.000Z')
    );
    expect(zeroHours).toBe(0);
  });

  it('assigns correct heat colors based on intensity thresholds', () => {
    expect(heatColorFor(0.85)).toBe('#ef4444');
    expect(heatColorFor(0.60)).toBe('#f97316');
    expect(heatColorFor(0.35)).toBe('#eab308');
    expect(heatColorFor(0.15)).toBe('#22c55e');
    expect(heatColorFor(0.0)).toBe('#0ea5e9');
  });
});
