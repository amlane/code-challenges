const buildAcronym = require("../buildAcronym.js");

test('buildAcronym("Search Engine Optimization") should return "SEO"', () => {
  expect(buildAcronym("Search Engine Optimization")).toBe("SEO");
});

test('buildAcronym("Frequently Asked Questions") should return "FAQ"', () => {
  expect(buildAcronym("Frequently Asked Questions")).toBe("FAQ");
});

test('buildAcronym("National Aeronautics and Space Administration") should return "NASA"', () => {
  expect(buildAcronym("National Aeronautics and Space Administration")).toBe(
    "NASA",
  );
});

test('buildAcronym("Federal Bureau of Investigation") should return "FBI"', () => {
  expect(buildAcronym("Federal Bureau of Investigation")).toBe("FBI");
});

test('buildAcronym("For your information") should return "FYI"', () => {
  expect(buildAcronym("For your information")).toBe("FYI");
});

test('buildAcronym("By the way") should return "BTW"', () => {
  expect(buildAcronym("By the way")).toBe("BTW");
});

test('buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH"', () => {
  expect(
    buildAcronym(
      "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily",
    ),
  ).toBe("AUHWPOTIMSH");
});

test("buildAcronym(null) should throw type error", () => {
  expect(() => buildAcronym(null)).toThrow();
});
