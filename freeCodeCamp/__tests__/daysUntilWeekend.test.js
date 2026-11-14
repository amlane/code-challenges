const daysUntilWeekend = require("../daysUntilWeekend.js");

test('daysUntilWeekend("2025-11-14") should return "1 day until the weekend."', () => {
  expect(daysUntilWeekend("2025-11-14")).toBe("1 day until the weekend.");
});

test('daysUntilWeekend("2025-01-01") should return "3 days until the weekend."', () => {
  expect(daysUntilWeekend("2025-01-01")).toBe("3 days until the weekend.");
});

test('daysUntilWeekend("2025-12-06") should return "It\'s the weekend!"', () => {
  expect(daysUntilWeekend("2025-12-06")).toBe("It's the weekend!");
});

test('daysUntilWeekend("2026-01-27") should return "4 days until the weekend."', () => {
  expect(daysUntilWeekend("2026-01-27")).toBe("4 days until the weekend.");
});

test('daysUntilWeekend("2026-09-07") should return "5 days until the weekend."', () => {
  expect(daysUntilWeekend("2026-09-07")).toBe("5 days until the weekend.");
});

test('daysUntilWeekend("2026-11-29") should return "It\'s the weekend!"', () => {
  expect(daysUntilWeekend("2026-11-29")).toBe("It's the weekend!");
});
