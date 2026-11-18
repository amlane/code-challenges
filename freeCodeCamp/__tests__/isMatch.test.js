const isMatch = require("../isMatch.js");

test('isMatch("helloworld", "helloworld") should return true', () => {
  expect(isMatch("helloworld", "helloworld")).toBe(true);
});

test('isMatch("helloworld", "helloworlds") should return false', () => {
  expect(isMatch("helloworld", "helloworlds")).toBe(false);
});

test('isMatch("helloworld", "jelloworld") should return true', () => {
  expect(isMatch("helloworld", "jelloworld")).toBe(true);
});

test('isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return true', () => {
  expect(
    isMatch(
      "thequickbrownfoxjumpsoverthelazydog",
      "thequickbrownfoxjumpsoverthelazydog",
    ),
  ).toBe(true);
});

test('isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return true', () => {
  expect(
    isMatch(
      "theslickbrownfoxjumpsoverthelazydog",
      "thequickbrownfoxjumpsoverthehazydog",
    ),
  ).toBe(true);
});

test('isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return false', () => {
  expect(
    isMatch(
      "thequickbrownfoxjumpsoverthelazydog",
      "thequickbrownfoxjumpsoverthehazycat",
    ),
  ).toBe(false);
});
