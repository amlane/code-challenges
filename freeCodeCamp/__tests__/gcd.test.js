const gcd = require("../gcd.js");

test("gcd(4, 6) should return 2", () => {
  expect(gcd(4, 6)).toBe(2);
});

test("gcd(20, 15) should return 5", () => {
  expect(gcd(20, 15)).toBe(5);
});

test("gcd(13, 17) should return 1", () => {
  expect(gcd(13, 17)).toBe(1);
});

test("gcd(654, 456) should return 6", () => {
  expect(gcd(654, 456)).toBe(6);
});

test("gcd(3456, 4320) should return 864", () => {
  expect(gcd(3456, 4320)).toBe(864);
});

test("gcd(48, 48) should return 48", () => {
  expect(gcd(48, 48)).toBe(48);
});

test("gcd(-1, 42) should throw error that value must be positive integer.", () => {
  expect(() => gcd(-1, 42)).toThrow("Values must be positive integers.");
});

test('gcd("banana", "pizza") should throw type error.', () => {
  expect(() => gcd("banana", "pizza")).toThrow("Value must be a number.");
});

test('gcd("16", "4") should coerce to numbers.', () => {
  expect(gcd("16", "4")).toBe(4);
});

test('gcd("16", 4) should coerce first argument to a number.', () => {
  expect(gcd("16", 4)).toBe(4);
});
