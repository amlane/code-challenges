/*
GCD
Given two positive integers, return their greatest common divisor (GCD).

The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.

Tests:
gcd(4, 6) should return 2.
gcd(20, 15) should return 5.
gcd(13, 17) should return 1.
gcd(654, 456) should return 6.
gcd(3456, 4320) should return 864.

Added test cases:
gcd(-1, 42) should throw error that value must be positive integer.
gcd("banana", "pizza") should throw type error.
gcd("16", "4") should either throw type error or coerce to number.

Other cases not in tests:
- check that x/y are greater than 0 (positive integers)
- check the x/y are numbers
*/

/* 
Initial solution

function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    if (!Number.isNaN(Number(x)) && !Number.isNaN(Number(y))) {
      x = Number(x);
      y = Number(y);
    } else {
      throw new Error("Value must be a number.");
    }
  }
  if (x < 1 || y < 1) throw new Error("Values must be positive integers.");

  for (let i = Math.min(x, y); i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
  return "No result found.";
}
*/

/*
Solution using Euclidean algorithm
It works in (O(log(min(a, b)))) time complexity, making it fast even for massive integers.

The algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its remainder when divided by the smaller number.
• Step 1: Divide the larger number (a) by the smaller number (b) and find the remainder (r).
• Step 2: Replace (a) with (b), and replace (b) with (r).
• Step 3: Repeat the process until the remainder (r) is (0).
• Step 4: The last non-zero remainder is the GCD.

Walk through example
gcd(48,18) // expected output is 6

48 % 18 = 12 // a = 48, b = 18, r = 12
18 % 12 = 6 // a = 18, b = 12, r = 6
12 % 6 // a = 12, b = 6, r = 0
Answer is 6
*/

function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    if (!Number.isNaN(Number(x)) && !Number.isNaN(Number(y))) {
      x = Number(x);
      y = Number(y);
    } else {
      throw new Error("Value must be a number.");
    }
  }
  if (x < 1 || y < 1) throw new Error("Values must be positive integers.");

  let a = Math.max(x, y);
  let b = Math.min(x, y);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

module.exports = gcd;
