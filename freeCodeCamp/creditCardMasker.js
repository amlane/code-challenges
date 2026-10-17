/*
Credit Card Masker
Given a string of credit card numbers, return a masked version of it using the following constraints:

- The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
- Replace all numbers, except the last four, with an asterisk (*).
- Leave the remaining characters unchanged.

For example, given "4012-8888-8888-1881" return "****-****-****-1881".

Tests:
mask("4012-8888-8888-1881") should return "****-****-****-1881".
mask("5105 1051 0510 5100") should return "**** **** **** 5100".
mask("6011 1111 1111 1117") should return "**** **** **** 1117".
mask("2223-0000-4845-0010") should return "****-****-****-0010".
*/

function mask(card) {
  // more error handling could be added:
  // - confirm length (credit cards can be 15-16 digits)
  // - confirm input data type is expected (string)
  if (!/^[0-9- ]+$/.test(card))
    throw new Error("Invalid card number. Must be 0-9 with spaces or hyphens.");

  let s = card.indexOf("-") === -1 ? " " : "-";

  return `****${s}****${s}****${s}${card.slice(card.length - 4)}`;
}

module.exports = mask;
