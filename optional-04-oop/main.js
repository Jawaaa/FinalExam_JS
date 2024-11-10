// main.js
import Item from './item.js';
import Inventory from './inventory.js';
import assert from 'node:assert';
import { test } from 'node:test';

const inventory = new Inventory();

// Membuat beberapa item
const item1 = new Item(1, 'Laptop', 10, 1000);
const item2 = new Item(2, 'Mouse', 50, 20);

// Menambahkan item ke inventaris
inventory.addItem(item1);
inventory.addItem(item2);

// Pengujian: Menambahkan dan menampilkan item
test('Initial Inventory', () => {
  assert.strictEqual(inventory.listItems(), 'ID: 1, Name: Laptop, Quantity: 10, Price: 1000\nID: 2, Name: Mouse, Quantity: 50, Price: 20');
});

// Memperbarui item dan memverifikasi perubahan
item1.updateDetails('Laptop', 8, 950);

test('Inventory after update', () => {
  assert.strictEqual(inventory.listItems(), 'ID: 1, Name: Laptop, Quantity: 8, Price: 950\nID: 2, Name: Mouse, Quantity: 50, Price: 20');
});

// Menghapus item dan memverifikasi perubahan
inventory.removeItem(2);

test('Inventory after removal', () => {
  assert.strictEqual(inventory.listItems(), 'ID: 1, Name: Laptop, Quantity: 8, Price: 950');
});

// Output yang diharapkan:
// Initial Inventory:
// ID: 1, Name: Laptop, Quantity: 10, Price: 1000
// ID: 2, Name: Mouse, Quantity: 50, Price: 20
//
// Inventory after update:
// ID: 1, Name: Laptop, Quantity: 8, Price: 950
// ID: 2, Name: Mouse, Quantity: 50, Price: 20
//
// Inventory after removal:
// ID: 1, Name: Laptop, Quantity: 8, Price: 950