const sendMessage = require("../phoneHome.js");

test("[300000, 300000] should return 2.5", () => {
  expect(sendMessage([300000, 300000])).toBe(2.5);
});

test("[384400, 384400] should return 3.0627", () => {
  expect(sendMessage([384400, 384400])).toBe(3.0627);
});

test("[54600000, 54600000] should return 364.5", () => {
  expect(sendMessage([54600000, 54600000])).toBe(364.5);
});

test("[1000000, 500000000, 1000000] should return 1674.3333", () => {
  expect(sendMessage([1000000, 500000000, 1000000])).toBe(1674.3333);
});

test("[10000, 21339, 50000, 31243, 10000] should return 2.4086", () => {
  expect(sendMessage([10000, 21339, 50000, 31243, 10000])).toBe(2.4086);
});

test("[802101, 725994, 112808, 3625770, 481239] should return 21.1597", () => {
  expect(sendMessage([802101, 725994, 112808, 3625770, 481239])).toBe(21.1597);
});
