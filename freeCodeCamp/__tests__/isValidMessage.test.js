const isValidMessage = require("../isValidMessage.js");

test('isValidMessage("hello world", "hw") should return true', () => {
  expect(isValidMessage("hello world", "hw")).toBe(true);
});

test('isValidMessage("ALL CAPITAL LETTERS", "acl") should return true', () => {
  expect(isValidMessage("ALL CAPITAL LETTERS", "acl")).toBe(true);
});

test('isValidMessage("Coding challenge are boring.", "cca") should return false', () => {
  expect(isValidMessage("Coding challenge are boring.", "cca")).toBe(false);
});

test('isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should return true', () => {
  expect(
    isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"),
  ).toBe(true);
});

test('isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should return false', () => {
  expect(
    isValidMessage(
      "The quick brown fox jumps over the lazy dog.",
      "TQBFJOTLDT",
    ),
  ).toBe(false);
});

test('isValidMessage("Lorem Ipsum.", null) should throw type error', () => {
  expect(() => isValidMessage("Lorem Ipsum.", null)).toThrow();
});
