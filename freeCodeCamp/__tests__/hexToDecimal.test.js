const hexToDecimal = require("../hexToDecimal.js");

test("Input of A should return 10", () => {
  expect(hexToDecimal("A")).toBe(10);
});

test("Input of 15 should return 21", () => {
  expect(hexToDecimal("15")).toBe(21);
});

test("Input of 2E should return 46", () => {
  expect(hexToDecimal("2E")).toBe(46);
});

test("Input of FF should return 255", () => {
  expect(hexToDecimal("FF")).toBe(255);
});

test("Input of A3F should return 2623", () => {
  expect(hexToDecimal("A3F")).toBe(2623);
});

test("Input of number should throw error", () => {
  expect(() => hexToDecimal(10)).toThrow(
    "Invalid argument type. Must be string. Input is number",
  );
});

test("Input with lowercase letters should still return correct value", () => {
  expect(hexToDecimal("a0")).toBe(160);
});

test("Input containing invalid characters should throw error", () => {
  expect(() => hexToDecimal("Pizza")).toThrow(
    "Input contains invalid characters. Must only contain a-f, A-F, or 0-9. Input: Pizza",
  );
});
