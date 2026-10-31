const nthPrime = require("../nthPrime.js");

test("nthPrime(5) should return 11", () => {
  expect(nthPrime(5)).toBe(11);
});

test("nthPrime(10) should return 29", () => {
  expect(nthPrime(10)).toBe(29);
});

test("nthPrime(16) should return 53", () => {
  expect(nthPrime(16)).toBe(53);
});

test("nthPrime(99) should return 523", () => {
  expect(nthPrime(99)).toBe(523);
});

test("nthPrime(1000) should return 7919", () => {
  expect(nthPrime(1000)).toBe(7919);
});
