const fizzBuzz = require("../fizzBuzz.js");

test("fizzBuzz(2) should return [1, 2]", () => {
  expect(fizzBuzz(2)).toStrictEqual([1, 2]);
});

test('fizzBuzz(4) should return [1, 2, "Fizz", 4]', () => {
  expect(fizzBuzz(4)).toStrictEqual([1, 2, "Fizz", 4]);
});

test('fizzBuzz(8) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]', () => {
  expect(fizzBuzz(8)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8]);
});

test('fizzBuzz(20) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]', () => {
  expect(fizzBuzz(20)).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
  ]);
});

test('fizzBuzz(50) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]', () => {
  expect(fizzBuzz(50)).toStrictEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
    16,
    17,
    "Fizz",
    19,
    "Buzz",
    "Fizz",
    22,
    23,
    "Fizz",
    "Buzz",
    26,
    "Fizz",
    28,
    29,
    "FizzBuzz",
    31,
    32,
    "Fizz",
    34,
    "Buzz",
    "Fizz",
    37,
    38,
    "Fizz",
    "Buzz",
    41,
    "Fizz",
    43,
    44,
    "FizzBuzz",
    46,
    47,
    "Fizz",
    49,
    "Buzz",
  ]);
});

test('fizzBuzz("2") should return [1, 2]', () => {
  expect(fizzBuzz("2")).toStrictEqual([1, 2]);
});

test("fizzBuzz(0) should return []", () => {
  expect(fizzBuzz(0)).toStrictEqual([]);
});

test("fizzBuzz(-1) should throw type error", () => {
  expect(() => fizzBuzz(-1)).toThrow();
});

test("fizzBuzz(null) should throw type error", () => {
  expect(() => fizzBuzz(null)).toThrow();
});

test("fizzBuzz([]) should throw type error", () => {
  expect(() => fizzBuzz([])).toThrow();
});

test("fizzBuzz({}}) should throw type error", () => {
  expect(() => fizzBuzz({})).toThrow();
});

test('fizzBuzz("   ") should throw type error', () => {
  expect(() => fizzBuzz("   ")).toThrow();
});
