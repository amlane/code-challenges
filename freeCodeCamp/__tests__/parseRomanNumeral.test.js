const parseRomanNumeral = require("../parseRomanNumeral.js");

test('parseRomanNumeral("III") should return 3', () => {
  expect(parseRomanNumeral("III")).toBe(3);
});

test('parseRomanNumeral("IV") should return 4', () => {
  expect(parseRomanNumeral("IV")).toBe(4);
});

test('parseRomanNumeral("XXVI") should return 26', () => {
  expect(parseRomanNumeral("XXVI")).toBe(26);
});

test('parseRomanNumeral("XCIX") should return 99', () => {
  expect(parseRomanNumeral("XCIX")).toBe(99);
});

test('parseRomanNumeral("CDLX") should return 460', () => {
  expect(parseRomanNumeral("CDLX")).toBe(460);
});

test('parseRomanNumeral("DIV") should return 504', () => {
  expect(parseRomanNumeral("DIV")).toBe(504);
});

test('parseRomanNumeral("MMXXV") should return 2025', () => {
  expect(parseRomanNumeral("MMXXV")).toBe(2025);
});

test('parseRomanNumeral("MMXXVY") should throw error', () => {
  expect(() => parseRomanNumeral("MMXXVY")).toThrow();
});

test("parseRomanNumeral(1204) should throw type error", () => {
  expect(() => parseRomanNumeral(1204)).toThrow();
});

test("parseRomanNumeral(null) should throw type error", () => {
  expect(() => parseRomanNumeral(null)).toThrow();
});

test("parseRomanNumeral(true) should throw type error", () => {
  expect(() => parseRomanNumeral(true)).toThrow();
});

test("parseRomanNumeral([]) should throw type error", () => {
  expect(() => parseRomanNumeral([])).toThrow();
});
