const countWords = require("../countWords.js");

test('countWords("Hello world") should return 2', () => {
  expect(countWords("Hello world")).toBe(2);
});

test('countWords("The quick brown fox jumps over the lazy dog.") should return 9', () => {
  expect(countWords("The quick brown fox jumps over the lazy dog.")).toBe(9);
});

test('countWords("I like coding challenges!") should return 4', () => {
  expect(countWords("I like coding challenges!")).toBe(4);
});

test('countWords("Complete the challenge in JavaScript and Python.") should return 7', () => {
  expect(countWords("Complete the challenge in JavaScript and Python.")).toBe(
    7,
  );
});

test('countWords("The missing semi-colon crashed the entire internet.") should return 7', () => {
  expect(
    countWords("The missing semi-colon crashed the entire internet."),
  ).toBe(7);
});

test('countWords("") should return 0', () => {
  expect(countWords("")).toBe(0);
});

test('countWords("  ") should return 0', () => {
  expect(countWords("  ")).toBe(0);
});

test("countWords(true) should return 0", () => {
  expect(countWords(true)).toBe(0);
});
