import { describe, it, expect } from 'vitest';
import { createQrMatrix } from '../utils/qrCode';

describe('QR Matrix Generator', () => {
  it('generates a valid QR matrix with correct dimensions', () => {
    const payload = 'ZC|bk-001|eq-cam-01|2026-11-01T10:00:00.000Z';
    const matrix = createQrMatrix(payload);

    // Version 5 QR code matrix is 37x37 (VERSION * 4 + 17 = 5 * 4 + 17 = 37)
    expect(matrix).toHaveLength(37);
    matrix.forEach((row) => {
      expect(row).toHaveLength(37);
      row.forEach((cell) => {
        expect(typeof cell).toBe('boolean');
      });
    });
  });

  it('produces position detection finder patterns at corners', () => {
    const matrix = createQrMatrix('TEST');
    // Top-left finder pattern center (3,3) should be true
    expect(matrix[3][3]).toBe(true);
    // Top-right finder pattern center (3, 33) should be true
    expect(matrix[3][33]).toBe(true);
    // Bottom-left finder pattern center (33, 3) should be true
    expect(matrix[33][3]).toBe(true);
  });
});
