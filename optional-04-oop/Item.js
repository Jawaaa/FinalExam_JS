/**
 * Class Item untuk merepresentasikan barang dengan atribut id, name, quantity, dan price.
 */
 class Item {
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  // Memperbarui detail barang
  updateDetails(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  // Menampilkan detail barang dalam format tertentu
  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
  }
}

// Jangan hapus kode di bawah ini!
export default Item;