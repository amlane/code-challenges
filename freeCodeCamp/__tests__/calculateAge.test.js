const calculateAge = require("../calculateAge.js");

test('calculateAge("2000-11-20") should return 25', () => {
  expect(calculateAge("2000-11-20")).toBe(25);
});

test('calculateAge("2000-12-01") should return 24', () => {
  expect(calculateAge("2000-12-01")).toBe(24);
});

test('calculateAge("2014-10-25") should return 11', () => {
  expect(calculateAge("2014-10-25")).toBe(11);
});

test('calculateAge("1994-01-06") should return 31', () => {
  expect(calculateAge("1994-01-06")).toBe(31);
});

test('calculateAge("1994-12-14") should return 30', () => {
  expect(calculateAge("1994-12-14")).toBe(30);
});

test('calculateAge("1994-12") should throw error', () => {
  expect(() => calculateAge("1994-12")).toThrow();
});

test("calculateAge(null) should throw error", () => {
  expect(() => calculateAge(null)).toThrow();
});

test("calculateAge([]) should throw error", () => {
  expect(() => calculateAge([])).toThrow();
});

test('calculateAge("2026-02-31") should throw error (invalid date)', () => {
  expect(() => calculateAge("2026-02-31")).toThrow();
});

test('calculateAge("2026-May-31") should throw error (invalid format)', () => {
  expect(() => calculateAge("2026-May-31")).toThrow();
});
