/*
FizzBuzz
Given an integer (n), return an array of integers from 1 to n (inclusive), replacing numbers that are multiple of:

- 3 with "Fizz".
- 5 with "Buzz".
- 3 and 5 with "FizzBuzz".

Tests:
fizzBuzz(2) should return [1, 2].
fizzBuzz(4) should return [1, 2, "Fizz", 4].
fizzBuzz(8) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8].
fizzBuzz(20) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"].
fizzBuzz(50) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"].
*/

/* 
A classic code challenge

I used `var` for `result` rather than `const` because the array is mutated as it's built. `const` only guarantees the binding isn't reassigned, but many readers take it to mean the value is fixed. `var` also fits here since `result` is scoped to the whole function, not a block.
*/

function fizzBuzz(n) {
  var num = typeof n === "string" && n.trim() !== "" ? Number(n) : n;

  if (!Number.isInteger(num) || num < 0)
    throw new TypeError(
      `fizzBuzz excepts argument to be number or str rep of numberfizzBuzz expects a non-negative integer or numeric string. Received ${typeof n}: ${String(n)}`,
    );

  var result = [];

  for (let i = 1; i <= num; i++) {
    let str = "";
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    result.push(str || i);
  }

  return result;
}

module.exports = fizzBuzz;
