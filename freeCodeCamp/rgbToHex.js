/*
RGB to Hex
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input | Output
"rgb(255, 255, 255)" | "#ffffff"
"rgb(1, 2, 3)" | "#010203"

- Make any letters lowercase.
- Return a # followed by six characters. Don't use any shorthand values.

Tests:
rgbToHex("rgb(255, 255, 255)") should return "#ffffff".
rgbToHex("rgb(1, 11, 111)") should return "#010b6f".
rgbToHex("rgb(173, 216, 230)") should return "#add8e6".
rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9".
*/

var hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function rgbToHex(rgb) {
  var values = rgb.slice(rgb.indexOf("(") + 1, rgb.indexOf(")")).split(",");
  return `#${values
    .map((val) => {
      return `${hex[Math.floor(val / 16)].padStart("0", 2)}${hex[val % 16].padStart("0", 2)}`;
    })
    .join("")}`;
}

module.exports = rgbToHex;
