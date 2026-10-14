const classification = require("../stellarClassification.js");

/*
Tests:
classification(5778) should return "G".
classification(2400) should return "M".
classification(9999) should return "A".
classification(3700) should return "K".
classification(3699) should return "M".
classification(210000) should return "O".
classification(6000) should return "F".
classification(11432) should return "B".
*/

test('5778 input should return "G"', () => {
  expect(classification(5778)).toBe("G");
});

test('2400 input should return "M"', () => {
  expect(classification(2400)).toBe("M");
});

test('5778 input should return "A"', () => {
  expect(classification(9999)).toBe("A");
});

test('3700 input should return "K"', () => {
  expect(classification(3700)).toBe("K");
});

test('210000 input should return "O"', () => {
  expect(classification(210000)).toBe("O");
});

test('6000 input should return "F"', () => {
  expect(classification(6000)).toBe("F");
});

test('11432 input should return "B"', () => {
  expect(classification(11432)).toBe("B");
});

test('"pizza" should return error', () => {
  expect(() => classification("pizza")).toThrow(
    "input must be a number: Input is type string",
  );
});

test("-3000 should return error", () => {
  expect(() => classification(-3000)).toThrow(
    "input must be greater than 0: Input is -3000",
  );
});
