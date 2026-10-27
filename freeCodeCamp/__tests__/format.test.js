const format = require("../format.js");

test('format(500) should return "8:20"', () => {
  expect(format(500)).toBe("8:20");
});

test('format(4000) should return "1:06:40"', () => {
  expect(format(4000)).toBe("1:06:40");
});

test('format(1) should return "0:01"', () => {
  expect(format(1)).toBe("0:01");
});

test('format(5555) should return "1:32:35"', () => {
  expect(format(5555)).toBe("1:32:35");
});

test('format(99999) should return "27:46:39"', () => {
  expect(format(99999)).toBe("27:46:39");
});
