const isFizzBuzz = require("../isFizzBuzz.js");

test('isFizzBuzz([1, 2, "Fizz", 4]) should return true', () => {
  expect(isFizzBuzz([1, 2, "Fizz", 4])).toBe(true);
});

test('isFizzBuzz([2, "Fizz", 4]) should return false', () => {
  expect(isFizzBuzz([2, "Fizz", 4])).toBe(false);
});

test('isFizzBuzz([1, 2, "Fizz", null]) should return false', () => {
  expect(isFizzBuzz([1, 2, "Fizz", null])).toBe(false);
});

test("isFizzBuzz([1, 2, 3, 4]) should return false", () => {
  expect(isFizzBuzz([1, 2, 3, 4])).toBe(false);
});

test('isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7]) should return false', () => {
  expect(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7])).toBe(false);
});

test('isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]) should return false', () => {
  expect(
    isFizzBuzz([
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
      "FizzBuzz",
    ]),
  ).toBe(false);
});

test('isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]) should return false', () => {
  expect(
    isFizzBuzz([
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
      "Fizz",
    ]),
  ).toBe(false);
});

test('isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]) should return false', () => {
  expect(
    isFizzBuzz([
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
      "Buzz",
    ]),
  ).toBe(false);
});

test('isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]) should return true', () => {
  expect(
    isFizzBuzz([
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
    ]),
  ).toBe(true);
});
