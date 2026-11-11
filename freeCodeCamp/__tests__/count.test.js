const count = require("../count.js");

test('count("Hello World") should return [3, 7]', () => {
  expect(count("Hello World")).toStrictEqual([3, 7]);
});

test('count("JavaScript") should return [3, 7]', () => {
  expect(count("JavaScript")).toStrictEqual([3, 7]);
});

test('count("Python") should return [1, 5]', () => {
  expect(count("Python")).toStrictEqual([1, 5]);
});

test('count("freeCodeCamp") should return [5, 7]', () => {
  expect(count("freeCodeCamp")).toStrictEqual([5, 7]);
});

test('count("Hello, World!") should return [3, 7]', () => {
  expect(count("Hello, World!")).toStrictEqual([3, 7]);
});

test('count("The quick brown fox jumps over the lazy dog.") should return [11, 24]', () => {
  expect(count("The quick brown fox jumps over the lazy dog.")).toStrictEqual([
    11, 24,
  ]);
});
