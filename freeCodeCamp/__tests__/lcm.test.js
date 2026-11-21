const lcm = require("../lcm.js");

test("lcm(4, 6) should return 12", () => {
  expect(lcm(4, 6)).toBe(12);
});

test("lcm(9, 6) should return 18", () => {
  expect(lcm(9, 6)).toBe(18);
});

test("lcm(10, 100) should return 100", () => {
  expect(lcm(10, 100)).toBe(100);
});

test("lcm(13, 17) should return 221", () => {
  expect(lcm(13, 17)).toBe(221);
});

test("lcm(45, 70) should return 630", () => {
  expect(lcm(45, 70)).toBe(630);
});

test("lcm(0, 6) should return 0", () => {
  expect(lcm(0, 6)).toBe(0);
});

test("lcm(0, 0) should return 0", () => {
  expect(lcm(0, 0)).toBe(0);
});

test("lcm(-0, -0) should return 0", () => {
  expect(lcm(-0, -0)).toBe(0);
});

test("lcm(1, null) should return type error", () => {
  expect(() => lcm(1, null)).toThrow();
});

test('lcm(2, "banana") should return type error', () => {
  expect(() => lcm(2, "banana")).toThrow();
});

test("lcm(9007199254740991, 1) should return 9007199254740991", () => {
  expect(lcm(9007199254740991, 1)).toBe(9007199254740991);
});

test("lcm(9007199254740992, 1) should return type error", () => {
  expect(() => lcm(9007199254740992, 1)).toThrow();
});

test("lcm(Infinity, 1) should return type error", () => {
  expect(() => lcm(Infinity, 1)).toThrow();
});

test("lcm(NaN, 1) should return type error", () => {
  expect(() => lcm(NaN, 1)).toThrow();
});

test("lcm(1.67, 3) should return type error", () => {
  expect(() => lcm(1.67, 3)).toThrow();
});
