/*
Fingerprint Test
Given two strings representing fingerprints, determine if they are a match using the following rules:

- Each fingerprint will consist only of lowercase letters (a-z).
- Two fingerprints are considered a match if:
    - They are the same length.
    - The number of differing characters does not exceed 10% of the fingerprint length.

Tests:
isMatch("helloworld", "helloworld") should return true.
isMatch("helloworld", "helloworlds") should return false.
isMatch("helloworld", "jelloworld") should return true.
isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return true.
isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return true.
isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return false.
*/

/* 
Uses a Hamming distance calculation to determine the difference between 2 strings of equal length.
In this case we can return early when:
- the strings differ in length
- the difference exceeds 10% of the string length
*/

function isMatch(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0, diff = 0; i < a.length; i++) {
    if (a[i] !== b[i] && ++diff * 10 > a.length) return false;
  }
  return true;
}

module.exports = isMatch;
