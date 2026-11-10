const findWord = require("../findWord.js");

test('findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") should return [[0, 1], [2, 1]]', () => {
  expect(
    findWord(
      [
        ["a", "c", "t"],
        ["t", "a", "t"],
        ["c", "t", "c"],
      ],
      "cat",
    ),
  ).toStrictEqual([
    [0, 1],
    [2, 1],
  ]);
});

test('findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog") should return [[0, 0], [0, 2]]', () => {
  expect(
    findWord(
      [
        ["d", "o", "g"],
        ["o", "g", "d"],
        ["d", "g", "o"],
      ],
      "dog",
    ),
  ).toStrictEqual([
    [0, 0],
    [0, 2],
  ]);
});

test('findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish") should return [[3, 3], [0, 3]]', () => {
  expect(
    findWord(
      [
        ["h", "i", "s", "h"],
        ["i", "s", "f", "s"],
        ["f", "s", "i", "i"],
        ["s", "h", "i", "f"],
      ],
      "fish",
    ),
  ).toStrictEqual([
    [3, 3],
    [0, 3],
  ]);
});

test('findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox") should return [[1, 3], [1, 1]]', () => {
  expect(
    findWord(
      [
        ["f", "x", "o", "x"],
        ["o", "x", "o", "f"],
        ["f", "o", "f", "x"],
        ["f", "x", "x", "o"],
      ],
      "fox",
    ),
  ).toStrictEqual([
    [1, 3],
    [1, 1],
  ]);
});
