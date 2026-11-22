const rgbToHex = require("../rgbToHex.js");

test('rgbToHex("rgb(255, 255, 255)") should return "#ffffff"', () => {
  expect(rgbToHex("rgb(255, 255, 255)")).toBe("#ffffff");
});

test('rgbToHex("rgb(1, 11, 111)") should return "#010b6f"', () => {
  expect(rgbToHex("rgb(1, 11, 111)")).toBe("#010b6f");
});

test('rgbToHex("rgb(173, 216, 230)") should return "#add8e6"', () => {
  expect(rgbToHex("rgb(173, 216, 230)")).toBe("#add8e6");
});

test('rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9"', () => {
  expect(rgbToHex("rgb(79, 123, 201)")).toBe("#4f7bc9");
});
