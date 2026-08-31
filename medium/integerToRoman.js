/*
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

Constraints:

1 <= num <= 3999

  const dict = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };

*/

/*
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
  const dict = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let maxValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900];
  let currMaxVal = 1000;
  let result = "";

  while (maxValues.length > 0 || num > 0) {
    if (num >= currMaxVal) {
      num = num - currMaxVal;
      result += dict[currMaxVal];
    } else {
      currMaxVal = maxValues.pop();
    }
  }
  return result;
};

// console.log(intToRoman("2")); // II
// console.log(intToRoman("1994")); // MCMXCIV
// console.log(intToRoman("58")); // LVIII
// console.log(intToRoman("3749")); // MMMDCCXLIX
// console.log(intToRoman("3947")); // MMMCMXLVII

// second approach

var intToRomanGreedy = function (num) {
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];
    }
  }
  return result;
};

console.log(intToRomanGreedy("2")); // II
console.log(intToRomanGreedy("1994")); // MCMXCIV
console.log(intToRomanGreedy("58")); // LVIII
console.log(intToRomanGreedy("3749")); // MMMDCCXLIX
console.log(intToRomanGreedy("3947")); // MMMCMXLVII
