/*
Binary to Decimal
Given a string representing a binary number, return its decimal equivalent as a number.

A binary number uses only the digits 0 and 1 to represent any number. To convert binary to decimal, multiply each digit by a power of 2 and add them together. Start by multiplying the rightmost digit by 2^0, the next digit to the left by 2^1, and so on. Once all digits have been multiplied by a power of 2, add the result together.

For example, the binary number 101 equals 5 in decimal because:

1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 4 + 0 + 1 = 5
*/

function toDecimal(binary) {
  const valCheck = /^[01]+$/;
  if (typeof binary !== "string" || !valCheck.test(binary)) {
    throw new Error(
      `Input must be a string representing a binary number: ${binary} is ${typeof binary}`,
    );
  }

  let exponentVal = Number(binary.length) - 1; // starting value
  let result = 0;

  for (let i = 0; i < binary.length; i++) {
    result += Number(binary[i]) * 2 ** exponentVal;
    exponentVal--;
  }

  return result;
}

console.log(toDecimal("101")); // 5
console.log(toDecimal("1010")); // 10
console.log(toDecimal("10010")); // 18
console.log(toDecimal("1010101")); // 85
console.log(toDecimal("-0")); // 0
// console.log(toDecimal(22)); // Error
// console.log(toDecimal("10px")); // Error
// console.log(toDecimal("Pizza")); // Error
// console.log(toDecimal(101010101)); // Error
