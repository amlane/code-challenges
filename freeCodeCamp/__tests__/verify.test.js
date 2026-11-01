const verify = require("../verify.js");

test('verify("foo", "bar", 57) should return true', () => {
  expect(verify("foo", "bar", 57)).toBe(true);
});

test('verify("foo", "bar", 54) should return false', () => {
  expect(verify("foo", "bar", 54)).toBe(false);
});

test('verify("freeCodeCamp", "Rocks", 238) should return true', () => {
  expect(verify("freeCodeCamp", "Rocks", 238)).toBe(true);
});

test('verify("Is this valid?", "No", 210) should return false', () => {
  expect(verify("Is this valid?", "No", 210)).toBe(false);
});

test('verify("Is this valid?", "Yes", 233) should return true', () => {
  expect(verify("Is this valid?", "Yes", 233)).toBe(true);
});

test('verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514) should return true', () => {
  expect(
    verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514),
  ).toBe(true);
});
