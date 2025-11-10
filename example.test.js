function isEven(n) {
  return n % 2 === 0;
}

test("isEven should return true for an even number", () => {
  let result = isEven(4);
  expect(result).toBe(true);
});

test("isEven should return false for an odd number", () => {
  let result = isEven(3);
  expect(result).toBe(false);
});
