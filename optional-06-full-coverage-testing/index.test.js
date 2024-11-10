import sum from './index.js'; // Mengimpor fungsi sum untuk diuji
import { describe, it, expect } from 'bun:test'; // Import untuk pengujian dengan bun

describe('Fungsi sum', () => {
  // Pengujian kasus ketika kedua input adalah angka positif
  it('harus mengembalikan hasil penjumlahan dua angka positif', () => {
    expect(sum(3, 4)).toBe(7);
  });

  // Pengujian kasus ketika salah satu input bukan angka
  it('harus mengembalikan 0 jika salah satu input bukan angka', () => {
    expect(sum(3, 'a')).toBe(0); // 'a' bukan angka
    expect(sum('a', 4)).toBe(0); // 'a' bukan angka
    expect(sum('a', 'b')).toBe(0); // keduanya bukan angka
  });

  // Pengujian kasus ketika kedua input adalah angka negatif
  it('harus mengembalikan 0 jika ada input angka negatif', () => {
    expect(sum(-3, 4)).toBe(0); // Salah satu angka negatif
    expect(sum(3, -4)).toBe(0); // Salah satu angka negatif
    expect(sum(-3, -4)).toBe(0); // Kedua angka negatif
  });

  // Pengujian kasus ketika kedua input adalah angka 0
  it('harus mengembalikan 0 jika kedua angka adalah 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  // Pengujian kasus ketika input adalah angka dengan tipe data lain
  it('harus mengembalikan 0 jika input adalah tipe data selain angka', () => {
    expect(sum(3, null)).toBe(0); // null bukan angka
    expect(sum(undefined, 4)).toBe(0); // undefined bukan angka
    expect(sum({}, 4)).toBe(0); // objek bukan angka
    expect(sum(3, [])).toBe(0); // array bukan angka
  });
});