/**
 * Class Inventory untuk mengelola daftar barang dalam inventaris.
 */
 class Inventory {
  constructor() {
    this.items = []; // Menyimpan daftar item
  }

  // Menambahkan item ke dalam inventaris
  addItem(item) {
    this.items.push(item);
  }

  // Menghapus item dari inventaris berdasarkan ID
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  // Menampilkan daftar item dalam inventaris
  listItems() {
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;