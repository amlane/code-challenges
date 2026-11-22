const repeatVowels = require("../repeatVowels.js");

test('repeatVowels("hello world") should return "helloo wooorld"', () => {
  expect(repeatVowels("hello world")).toBe("helloo wooorld");
});

test('repeatVowels("freeCodeCamp") should return "freeeCooodeeeeCaaaaamp"', () => {
  expect(repeatVowels("freeCodeCamp")).toBe("freeeCooodeeeeCaaaaamp");
});

test('repeatVowels("AEIOU") should return "AEeIiiOoooUuuuu"', () => {
  expect(repeatVowels("AEIOU")).toBe("AEeIiiOoooUuuuu");
});

test('repeatVowels("I like eating ice cream in Iceland") should return "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"', () => {
  expect(repeatVowels("I like eating ice cream in Iceland")).toBe(
    "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand",
  );
});
