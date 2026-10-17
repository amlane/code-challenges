const moonPhase = require("../moonPhase.js");

test('"2000-01-12" should return "New"', () => {
  expect(moonPhase("2000-01-12")).toBe("New");
});

test('"2000-01-13" should return "Waxing"', () => {
  expect(moonPhase("2000-01-13")).toBe("Waxing");
});

test('"2014-10-15" should return "Full"', () => {
  expect(moonPhase("2014-10-15")).toBe("Full");
});

test('"2012-10-21" should return "Waning"', () => {
  expect(moonPhase("2012-10-21")).toBe("Waning");
});

test('"2022-12-14" should return "New"', () => {
  expect(moonPhase("2022-12-14")).toBe("New");
});

test('"2000-01-06" should return "New"', () => {
  expect(moonPhase("2000-01-06")).toBe("New");
});
