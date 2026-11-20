const longestWord = require("../longestWord.js");

test('longestWord("The quick red fox") should return "quick"', () => {
  expect(longestWord("The quick red fox")).toBe("quick");
});

test('longestWord("Hello coding challenge.") should return "challenge"', () => {
  expect(longestWord("Hello coding challenge.")).toBe("challenge");
});

test('longestWord("Do Try This At Home.") should return "This"', () => {
  expect(longestWord("Do Try This At Home.")).toBe("This");
});

test('longestWord("This sentence... has commas, ellipses, and an exclamation point!") should return "exclamation"', () => {
  expect(
    longestWord(
      "This sentence... has commas, ellipses, and an exclamation point!",
    ),
  ).toBe("exclamation");
});

test('longestWord("A tie? No way!") should return "tie"', () => {
  expect(longestWord("A tie? No way!")).toBe("tie");
});

test('longestWord("Wouldn\'t you like to know.") should return "Wouldnt"', () => {
  expect(longestWord("Wouldn't you like to know.")).toBe("Wouldnt");
});
