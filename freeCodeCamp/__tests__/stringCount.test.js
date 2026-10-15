/*
Tests:
stringCount('abcdefg', 'def') should return 1.
stringCount('hello', 'world') should return 0.
stringCount('mississippi', 'iss') should return 2.
stringCount('she sells seashells by the seashore', 'sh') should return 3.
stringCount('101010101010101010101', '101') should return 10.
*/

const stringCount = require("../stringCount.js");

test("stringCount('abcdefg', 'def') should return 1", () => {
  expect(stringCount("abcdefg", "def")).toBe(1);
});

test("stringCount('hello', 'world') should return 0.", () => {
  expect(stringCount("hello", "world")).toBe(0);
});

test("stringCount('mississippi', 'iss') should return 2.", () => {
  expect(stringCount("mississippi", "iss")).toBe(2);
});

test("stringCount('she sells seashells by the seashore', 'sh') should return 3.", () => {
  expect(stringCount("she sells seashells by the seashore", "sh")).toBe(3);
});

test("stringCount('101010101010101010101', '101') should return 10.", () => {
  expect(stringCount("101010101010101010101", "101")).toBe(10);
});
