/*
Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

Tests:
parseRomanNumeral("III") should return 3.
parseRomanNumeral("IV") should return 4.
parseRomanNumeral("XXVI") should return 26.
parseRomanNumeral("XCIX") should return 99.
parseRomanNumeral("CDLX") should return 460.
parseRomanNumeral("DIV") should return 504.
parseRomanNumeral("MMXXV") should return 2025.
*/

function parseRomanNumeral(numeral) {
  if (typeof numeral !== "string")
    throw new TypeError(
      `parseRomanNumeral expects string. Received ${String(numeral)} ${typeof numeral}`,
    );
  const SYM_MAP = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let result = 0;
  let p = numeral.length - 1;

  while (p >= 0) {
    if (!SYM_MAP[numeral[p]])
      throw new Error(
        `parseRomanNumeral received invalid character. ${numeral}: ${numeral[p]} is not a valid roman numeral symbol (e.g. M, D, C, L, X, V, I)`,
      );
    let curr = SYM_MAP[numeral[p]];
    let next = SYM_MAP[numeral[p - 1]];

    if (curr > next) {
      result = result + (curr - next);
      p--;
    } else {
      result += curr;
    }
    p--;
  }

  return result;
}

module.exports = parseRomanNumeral;
