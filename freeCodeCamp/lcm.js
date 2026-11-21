/*
LCM
Given two integers, return the least common multiple (LCM) of the two numbers.

The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:

Multiples of 4 are 4, 8, 12 and so on.
Multiples of 6 are 6, 12, 18 and so on.
12 is the smallest number that is a multiple of both.

Tests:
lcm(4, 6) should return 12.
lcm(9, 6) should return 18.
lcm(10, 100) should return 100.
lcm(13, 17) should return 221.
lcm(45, 70) should return 630.
lcm(0, 6) should return 0.
lcm(0, 0) should return 0.
lcm(-0, -0) should return 0.
lcm(1, null) should return type error.
lcm(2, "banana") should return type error.
lcm(9007199254740991, 1) should return type error.
lcm(Infinity, 1) should return type error.
lcm(NaN, 1) should return type error.
lcm(1.67, 3) should return type error.
*/

/*
Approach uses Euclidian algorithm to find LCM using greatest common denomintor. 

Math.abs handles when inputs are negative numbers.
By definition, the least common multiple of non-zero integers is always the smallest positive integer that is divisible by both numbers.

Error handling:
    - Number.isSafeInteger protects against inputs that are not whole numbers that are less than the max safe integer in JavaScript. Additional handling could be added for BigInt inputs or coercing strings. 
    - When both inputs are 0 to avoid dividing 0 by 0 which is undefined/indeterminate. 
*/

function gcd(a, b) {
  while (b > 0) {
    prev = b;
    b = a % b;
    a = prev;
  }
  return a;
}

function lcm(a, b) {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b))
    throw new TypeError(`Arguments must be numbers: ${typeof a}, ${typeof b}`);

  // normalize inputs
  a = Math.abs(a);
  b = Math.abs(b);
  if (a === 0 && b === 0) return a;
  return (a / gcd(a, b)) * b;
}

module.exports = lcm;
