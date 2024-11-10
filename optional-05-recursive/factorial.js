/**
 * Fungsi untuk menghitung faktorial secara rekursif.
 * @param {number} n - Angka untuk menghitung faktorial.
 * @returns {number} Faktorial dari n.
 */
 function factorial(n) {
  if (n === 0) {
    return 1; // Basis rekursi: faktorial 0 adalah 1
  } else {
    return n * factorial(n - 1); // Pemanggilan rekursif
  }
}

// Jangan hapus kode di bawah ini!
export default factorial;