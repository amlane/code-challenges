const mask = require("../creditCardMasker.js");

test('mask("4012-8888-8888-1881") should return "****-****-****-1881"', () => {
  expect(mask("4012-8888-8888-1881")).toBe("****-****-****-1881");
});

test('mask("5105 1051 0510 5100") should return "**** **** **** 5100"', () => {
  expect(mask("5105 1051 0510 5100")).toBe("**** **** **** 5100");
});

test('mask("6011 1111 1111 1117") should return "**** **** **** 1117"', () => {
  expect(mask("6011 1111 1111 1117")).toBe("**** **** **** 1117");
});

test('mask("2223-0000-4845-0010") should return "****-****-****-0010"', () => {
  expect(mask("2223-0000-4845-0010")).toBe("****-****-****-0010");
});

test("Input with invalid characters should throw error", () => {
  expect(() => mask("2223-0000-4845-taco")).toThrow(
    "Invalid card number. Must be 0-9 with spaces or hyphens.",
  );
});
