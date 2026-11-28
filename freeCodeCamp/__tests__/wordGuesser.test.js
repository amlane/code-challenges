const wordGuesser = require("../wordGuesser.js");

test('wordGuesser("APPLE", "POPPA") should return "10201"', () => {
  expect(wordGuesser("APPLE", "POPPA")).toBe("10201");
});

test('wordGuesser("REACT", "TRACE") should return "11221"', () => {
  expect(wordGuesser("REACT", "TRACE")).toBe("11221");
});

test('wordGuesser("DEBUGS", "PYTHON") should return "000000"', () => {
  expect(wordGuesser("DEBUGS", "PYTHON")).toBe("000000");
});

test('wordGuesser("JAVASCRIPT", "TYPESCRIPT") should return "0000222222"', () => {
  expect(wordGuesser("JAVASCRIPT", "TYPESCRIPT")).toBe("0000222222");
});

test('wordGuesser("ORANGE", "ROUNDS") should return "110200"', () => {
  expect(wordGuesser("ORANGE", "ROUNDS")).toBe("110200");
});

test('wordGuesser("WIRELESS", "ETHERNET") should return "10021000"', () => {
  expect(wordGuesser("WIRELESS", "ETHERNET")).toBe("10021000");
});

test('wordGuesser("ORANGE", "ROUND") should throw error for different length', () => {
  expect(() => wordGuesser("ORANGE", "ROUND")).toThrow(
    "wordGuesser expects 2 arguments that are strings of the same length",
  );
});

test('wordGuesser("1234", 1234) should throw Type Error', () => {
  expect(() => wordGuesser("ORANGE", 1234)).toThrow(
    "wordGuesser expects 2 arguments that are strings.",
  );
});

test('wordGuesser("1234", "1234") should throw Error', () => {
  expect(() => wordGuesser("1234", "1234")).toThrow(
    "wordGuesser expects 2 arguments that are strings containing only uppercase letters from A-Z.",
  );
});

test('wordGuesser("abc", "ABC") should throw Error', () => {
  expect(() => wordGuesser("abc", "ABC")).toThrow(
    "wordGuesser expects 2 arguments that are strings containing only uppercase letters from A-Z.",
  );
});
