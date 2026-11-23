const isValidIPv4 = require("../isValidIPv4.js");

test('isValidIPv4("192.168.1.1") should return true', () => {
  expect(isValidIPv4("192.168.1.1")).toBe(true);
});

test('isValidIPv4("0.0.0.0") should return true', () => {
  expect(isValidIPv4("0.0.0.0")).toBe(true);
});

test('isValidIPv4("255.255.255.255") should return true', () => {
  expect(isValidIPv4("255.255.255.255")).toBe(true);
});

test('isValidIPv4("208.67.222.222") should return true', () => {
  expect(isValidIPv4("208.67.222.222")).toBe(true);
});

test('isValidIPv4("255.01.50.111") should return false', () => {
  expect(isValidIPv4("255.01.50.111")).toBe(false);
});

test('isValidIPv4("255.00.50.111") should return false', () => {
  expect(isValidIPv4("255.00.50.111")).toBe(false);
});

test('isValidIPv4("256.101.50.115") should return false', () => {
  expect(isValidIPv4("256.101.50.115")).toBe(false);
});

test('isValidIPv4("192.168.101.") should return false', () => {
  expect(isValidIPv4("192.168.101.")).toBe(false);
});

test('isValidIPv4("192168145213") should return false', () => {
  expect(isValidIPv4("192168145213")).toBe(false);
});

test('isValidIPv4("192.168.1.a") should return false', () => {
  expect(isValidIPv4("192.168.1.a")).toBe(false);
});

test('isValidIPv4("192.168.o.1") should return false', () => {
  expect(isValidIPv4("192.168.o.1")).toBe(false);
});

test('isValidIPv4("192.168.1.1a") should return false', () => {
  expect(isValidIPv4("192.168.1.1a")).toBe(false);
});

test("isValidIPv4(undefined) should throw type error", () => {
  expect(() => isValidIPv4(undefined)).toThrow();
});
