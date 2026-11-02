import { describe, it, expect } from 'vitest';
import {
  dateRangeFromPreset,
  applyDemandFilters,
  buildForecastSeries,
  DemandFilters,
} from '../utils/forecasting';
import { BookingRecord } from '../types/scheduling';

describe('Demand Forecasting Utilities', () => {
  it('creates date ranges from preset days', () => {
    const range7 = dateRangeFromPreset(7);
    expect(range7.start).toBeInstanceOf(Date);
    expect(range7.end).toBeInstanceOf(Date);
    expect(range7.end.getTime()).toBeGreaterThan(range7.start.getTime());

    const diffDays = Math.round((range7.end.getTime() - range7.start.getTime()) / 86_400_000);
    expect(diffDays).toBe(7);
  });

  it('filters bookings according to building, category, and date range', () => {
    const testBookings: BookingRecord[] = [
      {
        id: 'bk-1',
        equipmentId: 'eq-1',
        equipmentName: 'DSLR Camera',
        unitId: 'CAM-01',
        category: 'DSLR Camera',
        buildingId: 'bldg-science',
        buildingName: 'Science Wing',
        requesterName: 'Alice',
        requesterRole: 'Student',
        startAt: new Date(Date.now() - 3600000).toISOString(),
        endAt: new Date(Date.now() + 3600000).toISOString(),
        status: 'confirmed',
        purpose: 'Research',
        source: 'demo',
        qrToken: 'ZC|bk-1|eq-1|start',
      },
      {
        id: 'bk-2',
        equipmentId: 'eq-2',
        equipmentName: 'GPU Cluster',
        unitId: 'GPU-01',
        category: 'GPU Cluster',
        buildingId: 'bldg-media-1',
        buildingName: 'Media Lab',
        requesterName: 'Bob',
        requesterRole: 'Researcher',
        startAt: new Date(Date.now() - 3600000).toISOString(),
        endAt: new Date(Date.now() + 3600000).toISOString(),
        status: 'confirmed',
        purpose: 'AI Model Training',
        source: 'demo',
        qrToken: 'ZC|bk-2|eq-2|start',
      },
    ];

    const filterAll: DemandFilters = {
      dateRange: dateRangeFromPreset(7),
      building: 'all',
      category: 'all',
    };
    expect(applyDemandFilters(testBookings, filterAll)).toHaveLength(2);

    const filterBuilding: DemandFilters = {
      dateRange: dateRangeFromPreset(7),
      building: 'bldg-science',
      category: 'all',
    };
    expect(applyDemandFilters(testBookings, filterBuilding)).toHaveLength(1);

    const filterCategory: DemandFilters = {
      dateRange: dateRangeFromPreset(7),
      building: 'all',
      category: 'GPU Cluster',
    };
    expect(applyDemandFilters(testBookings, filterCategory)).toHaveLength(1);
  });

  it('builds historical and forecast projection points', () => {
    const series = buildForecastSeries([], 7);
    // 14 historical days + 7 forecast days = 21 points
    expect(series).toHaveLength(21);
    expect(series[0].historical).not.toBeNull();
    expect(series[20].historical).toBeNull();
    expect(series[20].forecast).toBeGreaterThanOrEqual(0);
  });
});
