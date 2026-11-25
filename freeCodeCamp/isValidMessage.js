/*
Message Validator
Given a message string and a validation string, determine if the message is valid.

A message is valid if each word in the message starts with the corresponding letter in the validation string, in order.
Letters are case-insensitive.
Words in the message are separated by single spaces.

Tests:
isValidMessage("hello world", "hw") should return true.
isValidMessage("ALL CAPITAL LETTERS", "acl") should return true.
isValidMessage("Coding challenge are boring.", "cca") should return false.
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD") should return true.
isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT") should return false.
*/

function isValidMessage(message, validator) {
  if (typeof message !== "string" && typeof validator !== "string")
    throw new TypeError(
      `isValidMessage expects string arguments. Inputs: message: ${message}, validator: ${validator}`,
    );
  var extractFirstLetter = message
    .split(" ")
    .map((word) => {
      return word.charAt(0);
    })
    .join("")
    .toLowerCase();
  return extractFirstLetter === validator.toLowerCase();
}

module.exports = isValidMessage;
