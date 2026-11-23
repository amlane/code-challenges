/*
IPv4 Validator
Given a string, determine if it is a valid IPv4 Address. A valid IPv4 address consists of four integer numbers separated by dots (.). Each number must satisfy the following conditions:

- It is between 0 and 255 inclusive.
- It does not have leading zeros (e.g. 0 is allowed, 01 is not).
- Only numeric characters are allowed.

Tests:
isValidIPv4("192.168.1.1") should return true.
isValidIPv4("0.0.0.0") should return true.
isValidIPv4("255.255.255.255") should return true.
isValidIPv4("208.67.222.222") should return true.
isValidIPv4("255.01.50.111") should return false.
isValidIPv4("255.00.50.111") should return false.
isValidIPv4("256.101.50.115") should return false.
isValidIPv4("192.168.101.") should return false.
isValidIPv4("192168145213") should return false.
isValidIPv4("192.168.1.a") should return false.
isValidIPv4("192.168.o.1") should return false.
isValidIPv4("192.168.1.1a") should return false.
*/

function isValidIPv4(ipv4) {
  if (typeof ipv4 !== "string")
    throw new TypeError(
      `Function isValidIPv4 expects argument to be string. Received: ${typeof ipv4}`,
    );

  return ipv4.split(".").filter(validateFormat).length === 4;
}

function validateFormat(ip) {
  var cand = Number(ip);
  return cand >= 0 && cand <= 255 && String(cand) == ip;
}

module.exports = isValidIPv4;
