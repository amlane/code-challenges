/*
Vowels and Consonants
Given a string, return an array with the number of vowels and number of consonants in the string.

- Vowels consist of a, e, i, o, u in any case.
- Consonants consist of all other letters in any case.
- Ignore any non-letter characters.

For example, given "Hello World", return [3, 7].

Tests:
count("Hello World") should return [3, 7].
count("JavaScript") should return [3, 7].
count("Python") should return [1, 5].
count("freeCodeCamp") should return [5, 7].
count("Hello, World!") should return [3, 7].
count("The quick brown fox jumps over the lazy dog.") should return [11, 24].
*/

/*
Using Sets since they have a constant time lookup O(1) when using .has() method (on average).
Tradeoff is that a set will use slightly more memory than an array due to hashing overhead but it would be negligible since the size is fixed at 5.
Using a Set gives O(1) lookup per character versus O(k) for an array scan, where k is the number of vowels (5). Since k is fixed, both approaches are O(n) overall, so this is a constant-factor improvement rather than an asymptotic one. It also scales better if the lookup list ever grows.

I would want to clarify with stakeholder for case of sometimes y if no other vowels, such as "by" or "fly".

An alternative approach could be stripping string of any non-alpha characters. 
Then subtract vCount from the length of str without any non-alpha characters, but I prefer not mutating the original data. That approach would use slightly more memory (Strings require more memory than integers. Also strings in Js are immutable so under the hood it is creating a new string.) but the real downside is that it wouldn't provide any substantial benefit for performance due to the extra allocation and pass. 

Another alternative approach would be to use a char-code range check would avoid regex and string allocation overhead but at the cost of readability.

function count(str) {
  const VOWELS = new Set([97, 101, 105, 111, 117]); // a e i o u char codes
  let vCount = 0;
  let cCount = 0;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i) | 32;
    if (VOWELS.has(code)) {
      vCount++;
    } else if (code >= 97 && code <= 122) {
      cCount++;
    }
  }
  return [vCount, cCount];
}
*/

function count(str) {
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);
  let vCount = 0;
  let cCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (VOWELS.has(str[i].toLowerCase())) {
      vCount++;
    } else if (/^[a-zA-Z]$/.test(str[i])) {
      cCount++;
    }
  }
  return [vCount, cCount];
}

module.exports = count;
