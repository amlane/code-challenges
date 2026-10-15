/*
Hex to Decimal
Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.

Hexadecimal is a number system that uses 16 digits:

- 0-9 represent values 0 through 9.
- A-F represent values 10 through 15.

Here's a partial conversion table:

Hexadecimal	Decimal
0	0
1	1
...	...
9	9
A	10
...	...
F	15
10	16
...	...
9F	159
A0	160
...	...
FF	255
100	256

Convert hex to decimal by taking the mapped value and multiply it by 16 to the power of its position from right to left.
For example:
9F
F = 15 and is in 0 position
9 = 9 and is in 1 position
15 * 16 ** 0 = 15 * 1 = 15
9 * 16 ** 1 = 144
144 + 15 = 159

100
0 * 16 ** 0 = 0 * 1 = 0
0 * 16 ** 1 = 0 * 16 = 0 
1 * 16 ** 2 = 1 * 256 = 256
0 + 0 + 256 = 256

A0 
0 * 16 ** 0 = 0 * 1 = 0
10 * 16 ** 1 = 10 * 16 = 160
0 + 160 = 160

The string will only contain characters 0-9 and A-F.

Tests:
hexToDecimal("A") should return 10.
hexToDecimal("15") should return 21.
hexToDecimal("2E") should return 46.
hexToDecimal("FF") should return 255.
hexToDecimal("A3F") should return 2623.
*/

function hexToDecimal(hex) {
  // additional error handling would ensure string only contains expected values
  if (typeof hex !== "string")
    throw new Error(
      `Invalid argument type. Must be string. Input is ${typeof hex}`,
    );

  let regex = /^[a-fA-F0-9]+$/;
  if (!regex.test(hex))
    throw new Error(
      `Input contains invalid characters. Must only contain a-f, A-F, or 0-9. Input: ${hex}`,
    );

  let position = hex.length - 1;
  let sum = 0;
  for (let i = 0; i < hex.length; i++) {
    const isNum = /\d/.test(hex[i]);
    let value = isNum ? Number(hex[i]) : hex[i].toUpperCase().charCodeAt() - 55;

    sum += value * 16 ** position;
    position--;
  }

  return sum;
}

module.exports = hexToDecimal;
