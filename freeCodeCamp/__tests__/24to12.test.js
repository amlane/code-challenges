const to12 = require("../24to12.js");

test('to12("1124") should return "11:24 AM".', () => {
  expect(to12("1124")).toBe("11:24 AM");
});

test('to12("0900") should return "9:00 AM".', () => {
  expect(to12("0900")).toBe("9:00 AM");
});

test('to12("1455") should return "2:55 PM".', () => {
  expect(to12("1455")).toBe("2:55 PM");
});

test('to12("2346") should return "11:46 PM".', () => {
  expect(to12("2346")).toBe("11:46 PM");
});

test('to12("0030") should return "12:30 AM".', () => {
  expect(to12("0030")).toBe("12:30 AM");
});
