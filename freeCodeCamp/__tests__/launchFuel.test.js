const launchFuel = require("../launchFuel.js");

test("Input of 50 should return 12.4", () => {
  expect(launchFuel(50)).toBe(12.4);
});

test("Input of 500 should return 124.8", () => {
  expect(launchFuel(500)).toBe(124.8);
});

test("Input of 243 should return 60.7", () => {
  expect(launchFuel(243)).toBe(60.7);
});

test("Input of 11000 should return 2749.8", () => {
  expect(launchFuel(11000)).toBe(2749.8);
});

test("Input of 6214 should return 1553.4", () => {
  expect(launchFuel(6214)).toBe(1553.4);
});
