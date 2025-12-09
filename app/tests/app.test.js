function sum(a, b) {
  return a + b;
}

test('penjumlahan harus benar', () => {
  expect(sum(2, 3)).toBe(5);
});
