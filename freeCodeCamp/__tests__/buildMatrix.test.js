const buildMatrix = require("../buildMatrix.js");

test("buildMatrix(2, 3) should return [[0, 0, 0], [0, 0, 0]]", () => {
  expect(buildMatrix(2, 3)).toStrictEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test("buildMatrix(3, 2) should return [[0, 0], [0, 0], [0, 0]]", () => {
  expect(buildMatrix(3, 2)).toStrictEqual([
    [0, 0],
    [0, 0],
    [0, 0],
  ]);
});

test("buildMatrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]", () => {
  expect(buildMatrix(4, 3)).toStrictEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test("buildMatrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]]", () => {
  expect(buildMatrix(9, 1)).toStrictEqual([
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
    [0],
  ]);
});
