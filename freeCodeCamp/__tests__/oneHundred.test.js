const oneHundred = require("../oneHundred.js");

test('oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One "', () => {
  expect(oneHundred("One hundred ")).toBe(
    "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ",
  );
});

test('oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC"', () => {
  expect(oneHundred("freeCodeCamp ")).toBe(
    "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC",
  );
});

test('oneHundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge"', () => {
  expect(oneHundred("daily challenges ")).toBe(
    "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge",
  );
});

test('oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"', () => {
  expect(oneHundred("!")).toBe(
    "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
  );
});

test("empty string should return empty string", () => {
  expect(oneHundred("")).toBe("");
});

test("strings greater than 100 characters", () => {
  expect(
    oneHundred(
      "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp",
    ),
  ).toBe(
    "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC",
  );
});

test("null/undefined should return error", () => {
  expect(() => oneHundred(null)).toThrow("Argument must be a string: object");
});
