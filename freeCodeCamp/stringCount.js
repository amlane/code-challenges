/*
String Count
Given two strings, determine how many times the second string appears in the first.

The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two.

Tests:
stringCount('abcdefg', 'def') should return 1.
stringCount('hello', 'world') should return 0.
stringCount('mississippi', 'iss') should return 2.
stringCount('she sells seashells by the seashore', 'sh') should return 3.
stringCount('101010101010101010101', '101') should return 10.
*/

function stringCount(text, pattern) {
  let occurrences = 0;
  let index = text.indexOf(pattern);

  while (index !== -1) {
    occurrences++;
    index = text.indexOf(pattern, index + 1);
  }

  return occurrences;
}

module.exports = stringCount;
