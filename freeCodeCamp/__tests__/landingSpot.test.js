const findLandingSpot = require("../landingSpot.js");

test("[[1, 0], [2, 0]] should return [0, 1]", () => {
  expect(
    findLandingSpot([
      [1, 0],
      [2, 0],
    ]),
  ).toStrictEqual([0, 1]);
});

test("[[9, 0, 3], [7, 0, 4], [8, 0, 5]] should return [1, 1]", () => {
  expect(
    findLandingSpot([
      [9, 0, 3],
      [7, 0, 4],
      [8, 0, 5],
    ]),
  ).toStrictEqual([1, 1]);
});

test("[[1, 2, 1], [0, 0, 2], [3, 0, 0]] should return [2, 2]", () => {
  expect(
    findLandingSpot([
      [1, 2, 1],
      [0, 0, 2],
      [3, 0, 0],
    ]),
  ).toStrictEqual([2, 2]);
});

test("[[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]) should return [2, 1]", () => {
  expect(
    findLandingSpot([
      [9, 6, 0, 8],
      [7, 1, 1, 0],
      [3, 0, 3, 9],
      [8, 6, 0, 9],
    ]),
  ).toStrictEqual([2, 1]);
});
