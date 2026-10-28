/*
Given a string s, find the length of the longest substring without duplicate characters.
Return the length as an integer.

This problems calls for a variable-size sliding window algorithm.
 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// brute force solution

var lengthOfLongestSubstring = function (s) {
  let currentChars = {};
  let result = "";
  let currentWinner = "";

  s.split("").forEach((char) => {
    if (!currentChars[char]) {
      result += char;
    } else {
      currentChars = {};
      if (result.length > currentWinner.length) {
        currentWinner = result;
      }
      result = char;
    }
    currentChars[char] = char;
    console.log("char, result, currentWinner", char, result, currentWinner);
  });

  currentWinner = currentWinner > result ? currentWinner : result;

  return currentWinner.length;
};

// console.log(lengthOfLongestSubstring("abcabcbb")); // 3 "abc"
// console.log(lengthOfLongestSubstring("bbbbb")); // 1 "b"
// console.log(lengthOfLongestSubstring("pwwkew")); // 3 "wke"
// console.log(lengthOfLongestSubstring("pwwkewkrqd")); // 6 "ewkrqd"

// Solution 2 using 2 pointer sliding window

var lengthOfLongestSubstring2 = function (s) {
  let p1 = 0;
  let p2 = 1;

  let currentSubStr = s[p1]; // initialize with first letter
  let longestWindow = 0;

  while (p2 < s.length) {
    if (!currentSubStr.includes(s[p2])) {
      currentSubStr += s[p2];
      p2++;
    } else {
      p1++;
      if (p2 === p1) p2++;
      currentSubStr = s.slice(p1, p2);
    }
    longestWindow = p2 - p1 > longestWindow ? p2 - p1 : longestWindow;
  }
  if (!longestWindow && s.length > 0) longestWindow++;

  return longestWindow;
};

// console.log(lengthOfLongestSubstring2("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring2("bbbbb")); // 1
// console.log(lengthOfLongestSubstring2("pwwkew")); // 3
// console.log(lengthOfLongestSubstring2("pwwkewkrqd")); // 6 "ewkrqd"
// console.log(lengthOfLongestSubstring2("S")); // 1
// console.log(lengthOfLongestSubstring2("")); // 0

// solution 3 using a Set to determine duplicates

var lengthOfLongestSubstring3 = function (s) {
  let dict = {};
  let l = 0,
    r = 0,
    maxLen = 0;

  while (r < s.length) {
    if (!dict[s[r]]) {
      dict[s[r]] = true;
      maxLen = Math.max(maxLen, r - l + 1);
      r++;
    } else {
      dict[s[l]] = false;
      l++;
    }
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring3("abcabcbb")); // 3
console.log(lengthOfLongestSubstring3("bbbbb")); // 1
console.log(lengthOfLongestSubstring3("pwwkew")); // 3
console.log(lengthOfLongestSubstring3("pwwkewkrqd")); // 6 "ewkrqd"
console.log(lengthOfLongestSubstring3("S")); // 1
console.log(lengthOfLongestSubstring3("")); // 0
