/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

/*
 *
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let prefix = strs[0]; // initialize to first item in the list

  for (let i = 1; i < strs.length; i++) {
    if (prefix === "") return prefix;
    if (prefix.length > strs[i].length)
      prefix = prefix.slice(0, strs[i].length);
    for (let j = 0; j < prefix.length; j++) {
      if (strs[i][j] !== prefix[j]) {
        prefix = prefix.slice(0, j);
        break;
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["peace", "pea", "peach"])); // "pea"
console.log(longestCommonPrefix(["nice", "neat", "now"])); // "n"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["pizza", "", "taco"])); // ""

/*
Follow up concepts to try: 
1. Vertical vs Horizontal scanning where you compare each letter of every element in columns. This would be beneficial when there is early divergence detected. If all strings across the list have mostly matching prefixes this may not be the best approach. It seems like it would require a lot of memory. 

2. Sorting the list alphabetically would allow you to check just the first and last items against each other since alphabetical order is inherently ordering by longest common prefix. The first and last items would be the 2 most divergent cases. 
*/

console.log(["dog", "door", "dorm"].sort());
console.log(["doctor", "dog", "door", "dorm"].sort());
console.log(["peace", "pet", "pen", "pew", "pelt", "peaceful"].sort());
