const sequence = require("../sequence.js");

test('sequence(5) should return "12345"', () => {
  expect(sequence(5)).toBe("12345");
});

test('sequence(10) should return "12345678910"', () => {
  expect(sequence(10)).toBe("12345678910");
});

test('sequence(1) should return "1"', () => {
  expect(sequence(1)).toBe("1");
});

test('sequence(27) should return "123456789101112131415161718192021222324252627"', () => {
  expect(sequence(27)).toBe("123456789101112131415161718192021222324252627");
});
