const combinations = require("../combinations.js");

test("combinations(52) should return 1", () => {
  expect(combinations(52)).toBe(1);
});

test("combinations(1) should return 52", () => {
  expect(combinations(1)).toBe(52);
});

test("combinations(2) should return 1326", () => {
  expect(combinations(2)).toBe(1326);
});

test("combinations(5) should return 2598960", () => {
  expect(combinations(5)).toBe(2598960);
});

test("combinations(10) should return 15820024220", () => {
  expect(combinations(10)).toBe(15820024220);
});

test("combinations(50) should return 1326", () => {
  expect(combinations(50)).toBe(1326);
});
