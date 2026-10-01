function formatNumber(number) {
  if (typeof number !== "string")
    throw Error(
      `${number} is an invalid input (Type ${typeof number}). Argument must be a string.`,
    );

  const hasNonNumbers = /\D/.test(number);
  if (hasNonNumbers)
    throw Error(
      `${number} is an invalid input. Argument must contain only numbers 0-9.`,
    );

  if (number.length !== 11)
    throw Error(
      `${number} is an invalid length (${number.length}). Argument must be 11 characters.`,
    );

  const countryCode = number[0];
  const areaCode = number.slice(1, 4);
  const prefix = number.slice(4, 7);
  const suffix = number.slice(7);
  const formattedNum = `+${countryCode} (${areaCode}) ${prefix}-${suffix}`;
  return formattedNum;
}

console.log(formatNumber("05552340182"));
console.log(formatNumber(null));
console.log(formatNumber(05552340182));
console.log(formatNumber("181645414777"));
console.log(formatNumber("1816454147a"));
console.log(formatNumber("-1234567890"));
console.log(formatNumber("0x123456789"));
console.log(formatNumber(" 1234567890"));
console.log(formatNumber("1e234567890"));
