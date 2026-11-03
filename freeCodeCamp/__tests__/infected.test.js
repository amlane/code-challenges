const infected = require("../infected.js");

test("infected(1) should return 2", () => {
  expect(infected(1)).toBe(2);
});

test("infected(3) should return 6", () => {
  expect(infected(3)).toBe(6);
});

test("infected(8) should return 152", () => {
  expect(infected(8)).toBe(152);
});

test("infected(17) should return 39808", () => {
  expect(infected(17)).toBe(39808);
});

test("infected(25) should return 5217638", () => {
  expect(infected(25)).toBe(5217638);
});
