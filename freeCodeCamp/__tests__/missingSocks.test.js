const sockPairs = require("../missingSocks.js");

test("sockPairs(2, 5) should return 1", () => {
  expect(sockPairs(2, 5)).toBe(1);
});
test("sockPairs(1, 2) should return 0", () => {
  expect(sockPairs(1, 2)).toBe(0);
});
test("sockPairs(5, 11) should return 4", () => {
  expect(sockPairs(5, 11)).toBe(4);
});
test("sockPairs(6, 25) should return 3", () => {
  expect(sockPairs(6, 25)).toBe(3);
});
test("sockPairs(1, 8) should return 0", () => {
  expect(sockPairs(1, 8)).toBe(0);
});
