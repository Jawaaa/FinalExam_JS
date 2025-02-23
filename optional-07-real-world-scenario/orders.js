// Fungsi untuk menghasilkan id unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel yang menyimpan data orders
let orders = [];

// Fungsi untuk menambahkan pesanan
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu',
  };
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((sum, order) => sum + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};