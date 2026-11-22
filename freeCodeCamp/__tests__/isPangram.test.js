const isPangram = require("../isPangram.js");

test('isPangram("hello", "helo") should return true', () => {
  expect(isPangram("hello", "helo")).toBe(true);
});

test('isPangram("hello", "hel") should return false', () => {
  expect(isPangram("hello", "hel")).toBe(false);
});

test('isPangram("hello", "helow") should return false', () => {
  expect(isPangram("hello", "helow")).toBe(false);
});

test('isPangram("hello world", "helowrd") should return true', () => {
  expect(isPangram("hello world", "helowrd")).toBe(true);
});

test('isPangram("Hello World!", "helowrd") should return true', () => {
  expect(isPangram("Hello World!", "helowrd")).toBe(true);
});

test('isPangram("Hello World!", "heliowrd") should return false', () => {
  expect(isPangram("Hello World!", "heliowrd")).toBe(false);
});

test('isPangram("freeCodeCamp", "frcdmp") should return false', () => {
  expect(isPangram("freeCodeCamp", "frcdmp")).toBe(false);
});

test('isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true', () => {
  expect(
    isPangram(
      "The quick brown fox jumps over the lazy dog.",
      "abcdefghijklmnopqrstuvwxyz",
    ),
  ).toBe(true);
});
