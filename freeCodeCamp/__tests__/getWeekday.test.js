const getWeekday = require("../getWeekday.js");

test('getWeekday("2025-11-06") should return "Thursday"', () => {
  expect(getWeekday("2025-11-06")).toBe("Thursday");
});

test('getWeekday("1999-12-31") should return "Friday"', () => {
  expect(getWeekday("1999-12-31")).toBe("Friday");
});

test('getWeekday("1111-11-11") should return "Saturday"', () => {
  expect(getWeekday("1111-11-11")).toBe("Saturday");
});

test('getWeekday("2112-12-21") should return "Wednesday"', () => {
  expect(getWeekday("2112-12-21")).toBe("Wednesday");
});

test('getWeekday("2345-10-01") should return "Monday"', () => {
  expect(getWeekday("2345-10-01")).toBe("Monday");
});
