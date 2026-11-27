/*
Acronym Builder
Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.

Tests:
buildAcronym("Search Engine Optimization") should return "SEO".
buildAcronym("Frequently Asked Questions") should return "FAQ".
buildAcronym("National Aeronautics and Space Administration") should return "NASA".
buildAcronym("Federal Bureau of Investigation") should return "FBI".
buildAcronym("For your information") should return "FYI".
buildAcronym("By the way") should return "BTW".
buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH".
*/

/*
Additional considerations I would take:
- Spec says "The acronym should consist of the first letter of each word capitalized, unless otherwise noted" but there are no test cases where it is otherwise noted. For now I have just assumed always capitalized but I would ask for clarification or test cases where lowercase would be needed. For example, "Department of Defense" would return "DD" based on the spec. Is that expected behavior or would you expect "DoD"?
- Since any time a string is mutated in JavaScript, it creates a new string, I decided to uppercase everything at the end at the same time, choosing simplicity since the spec only provided uppercase examples. If there are cases where casing should not be uppercase, this would need to be moved inside the map. 
*/

function buildAcronym(str) {
  if (typeof str !== "string")
    throw new TypeError(
      `buildAcronym expects string. Received: ${String(str)} ${typeof str}`,
    );
  const SKIP = new Set(["a", "for", "an", "and", "by", "of"]);
  const cleanedStr = str.trim();
  return cleanedStr
    .split(" ")
    .map((word, i) => {
      return i !== 0 && SKIP.has(word) ? "" : word.charAt(0);
    })
    .join("")
    .toUpperCase();
}

module.exports = buildAcronym;
