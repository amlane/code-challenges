/*
Pangram
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.

Tests:
isPangram("hello", "helo") should return true
isPangram("hello", "hel") should return false
isPangram("hello", "helow") should return false
isPangram("hello world", "helowrd") should return true
isPangram("Hello World!", "helowrd") should return true
isPangram("Hello World!", "heliowrd") should return false
isPangram("freeCodeCamp", "frcdmp") should return false
isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true
*/

function isPangram(sentence, letters) {
  var cleanedSentence = new Set(
    sentence
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase()
      .split(""),
  );
  var setB = new Set(letters.split(""));

  return cleanedSentence.symmetricDifference(setB).size === 0;
}

module.exports = isPangram;
