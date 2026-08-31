/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.


Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

Base values:
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Subtraction cases
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

  const dict = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

Roman numerals are generally written from largest to smallest so with that logic in mind...
if you find a preceeding letter to be less than rather than greater than or equal to, then you know to subtract those values rather than add. 
(e.g. IV is I - V = 4, VI is V+ I = 6)
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0;
  let l = 0;
  let r = 1;
  let lenCount = s.length;

  const dict = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  while (lenCount) {
    if (s[l] + s[r] in dict) {
      total += dict[s[l] + s[r]];
      l++;
      r++;
      lenCount--;
    } else {
      total += dict[s[l]];
    }
    l++;
    r++;
    lenCount--;
  }

  return total;
};

// console.log(romanToInt("III")); // 3
// console.log(romanToInt("LVIII")); // 50 + 5 + 1 + 1 + 1 = 58
// console.log(romanToInt("MCMXCIV")); // 1000 + 900 + 90 + 4 = 1994

// 2nd approach

var romanToIntAlternativeSolution = function (s) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = dict[s[i]];
    let next = dict[s[i + 1]];

    if (next > curr) {
      total -= curr;
    } else {
      total += curr;
    }
  }
  return total;
};

console.log(romanToIntAlternativeSolution("III")); // 3
console.log(romanToIntAlternativeSolution("LVIII")); // 50 + 5 + 1 + 1 + 1 = 58
console.log(romanToIntAlternativeSolution("MCMXCIV")); // 1000 + 900 + 90 + 4 = 1994
