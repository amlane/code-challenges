/*
Vowel Repeater
Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
The original vowel should keep its case.
Repeated vowels should be lowercase.
All non-vowel characters should keep their original case.

Tests:
repeatVowels("hello world") should return "helloo wooorld".
repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp".
repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu".
repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand".
*/

function repeatVowels(str) {
  var VOWELS = ["a", "e", "i", "o", "u"];
  var vCount = 0;
  var result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    var cand = str[i].toLowerCase();
    if (VOWELS.includes(cand)) {
      for (let j = 0; j < vCount; j++) {
        result += cand;
      }
      vCount++;
    }
  }

  return result;
}

console.log(repeatVowels("hello world"));

module.exports = repeatVowels;
