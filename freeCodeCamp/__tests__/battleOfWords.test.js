const battle = require("../battleOfWords.js");

test('battle("hello world", "hello word") should return "We win"', () => {
  expect(battle("hello world", "hello word")).toBe("We win");
});

test('battle("Hello world", "hello world") should return "We win".', () => {
  expect(battle("Hello world", "hello word")).toBe("We win");
});

test('battle("lorem ipsum", "kitty ipsum") should return "We lose".', () => {
  expect(battle("lorem ipsum", "kitty ipsum")).toBe("We lose");
});

test('battle("hello world", "world hello") should return "Draw".', () => {
  expect(battle("hello world", "world hello")).toBe("Draw");
});

test('battle("git checkout", "git switch") should return "We win".', () => {
  expect(battle("git checkout", "git switch")).toBe("We win");
});

test('battle("Cheeseburger with fries", "Cheeseburger with Fries") should return "We lose".', () => {
  expect(battle("Cheeseburger with fries", "Cheeseburger with Fries")).toBe(
    "We lose",
  );
});

test('battle("We must never surrender", "Our team must win") should return "Draw".', () => {
  expect(battle("We must never surrender", "Our team must win")).toBe("Draw");
});
