/**
 * Fungsi untuk menghasilkan deret Fibonacci hingga elemen ke-n secara rekursif.
 * @param {number} n - Elemen Fibonacci yang ingin dihitung.
 * @returns {number[]} Deret Fibonacci hingga elemen ke-n.
 */
 function fibonacci(n) {
  if (n === 0) {
    return [0]; // Deret Fibonacci mulai dari 0
  } else if (n === 1) {
    return [0, 1]; // Deret Fibonacci hingga elemen pertama adalah [0, 1]
  } else {
    const fib = fibonacci(n - 1); // Memanggil fibonacci secara rekursif
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]); // Menambahkan elemen baru berdasarkan dua elemen terakhir
    return fib;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;