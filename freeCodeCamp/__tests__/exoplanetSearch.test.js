/*
Tests:
hasExoplanet("665544554") should return false.
hasExoplanet("FGFFCFFGG") should return true.
hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false.
hasExoplanet("FREECODECAMP") should return true.
hasExoplanet("9AB98AB9BC98A") should return false.
hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true.
*/

const hasExoplanet = require("../exoplanetSearch.js");

test('hasExoplanet("665544554") should return false', () => {
  expect(hasExoplanet("665544554")).toBe(false);
});

test('hasExoplanet("FGFFCFFGG") should return true', () => {
  expect(hasExoplanet("FGFFCFFGG")).toBe(true);
});

test('hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false', () => {
  expect(hasExoplanet("MONOPLONOMONPLNOMPNOMP")).toBe(false);
});

test('hasExoplanet("FREECODECAMP") should return true', () => {
  expect(hasExoplanet("FREECODECAMP")).toBe(true);
});

test('hasExoplanet("9AB98AB9BC98A") should return false', () => {
  expect(hasExoplanet("9AB98AB9BC98A")).toBe(false);
});

test('hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true', () => {
  expect(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE")).toBe(true);
});

test("hasExoplanet(1234) should throw error", () => {
  expect(() => hasExoplanet(1234)).toThrow(
    "Invalid argument type. Must be string. Input is number",
  );
});
