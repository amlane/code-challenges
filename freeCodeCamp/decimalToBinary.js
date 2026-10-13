/*
Decimal to Binary
Given a non-negative integer, return its binary representation as a string.

A binary number uses only the digits 0 and 1 to represent any number. To convert a decimal number to binary, repeatedly divide the number by 2 and record the remainder. Repeat until the number is zero. Read the remainders last recorded to first. For example, to convert 12 to binary:

12 ÷ 2 = 6 remainder 0
6 ÷ 2 = 3 remainder 0
3 ÷ 2 = 1 remainder 1
1 ÷ 2 = 0 remainder 1
12 in binary is 1100.


5 / 2 = 2 remainder 1
2 / 2 = 1 remainder 0
1 / 2 = 0 remainder 1 

*/

function toBinary(decimal) {
  let currVal = decimal;
  let result = [];

  while (currVal > 0) {
    const nextVal = Math.floor(currVal / 2);
    const remainder = Math.floor(currVal % 2);
    currVal = nextVal;
    result.unshift(remainder);
  }

  return result.join("");
}

console.log(toBinary(5)); // "101"
console.log(toBinary(12)); // "1100"
console.log(toBinary(50)); // "110010"
console.log(toBinary(99)); // "1100011"
