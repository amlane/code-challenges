const countRectangles = require("../countRectangles.js");

test("countRectangles(1, 3) should return 6", () => {
  expect(countRectangles(1, 3)).toBe(6);
});

test("countRectangles(3, 2) should return 18", () => {
  expect(countRectangles(3, 2)).toBe(18);
});

test("countRectangles(1, 2) should return 3", () => {
  expect(countRectangles(1, 2)).toBe(3);
});

test("countRectangles(5, 4) should return 150", () => {
  expect(countRectangles(5, 4)).toBe(150);
});

test("countRectangles(11, 19) should return 12540", () => {
  expect(countRectangles(11, 19)).toBe(12540);
});
