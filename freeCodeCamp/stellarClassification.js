/*
Space Week Day 1: Stellar Classification

October 4th marks the beginning of World Space Week. The next seven days will bring you astronomy-themed coding challenges.

For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:

"O": 30,000 K or higher

"B": 10,000 K - 29,999 K

"A": 7,500 K - 9,999 K

"F": 6,000 K - 7,499 K

"G": 5,200 K - 5,999 K

"K": 3,700 K - 5,199 K

"M": 0 K - 3,699 K

Return the classification of the given star.

Tests:
classification(5778) should return "G".
classification(2400) should return "M".
classification(9999) should return "A".
classification(3700) should return "K".
classification(3699) should return "M".
classification(210000) should return "O".
classification(6000) should return "F".
classification(11432) should return "B".
*/

function classification(temp) {
  if (typeof temp !== "number") {
    throw new Error(`input must be a number: Input is type ${typeof temp}`);
  }
  if (temp <= 0) {
    throw new Error(`input must be greater than 0: Input is ${temp}`);
  }

  let result;

  switch (true) {
    case temp <= 3699:
      result = "M";
      break;
    case temp <= 5199:
      result = "K";
      break;
    case temp <= 5999:
      result = "G";
      break;
    case temp <= 7499:
      result = "F";
      break;
    case temp <= 9999:
      result = "A";
      break;
    case temp <= 29999:
      result = "B";
      break;
    case temp >= 30000:
      result = "O";
      break;
  }

  return result;
}

module.exports = classification;
