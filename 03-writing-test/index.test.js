import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function should add two numbers correctly', () => {
  console.log('Test 1: sum(2, 3) should return 5');
  assert.strictEqual(sum(2, 3), 5);
  console.log('PASS');

  console.log('Test 2: sum(-1, 1) should return 0');
  assert.strictEqual(sum(-1, 1), 0);
  console.log('PASS');

  console.log('Test 3: sum(0, 0) should return 0');
  assert.strictEqual(sum(0, 0), 0);
  console.log('PASS');
});