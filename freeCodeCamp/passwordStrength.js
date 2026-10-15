/*
P@ssw0rd Str3ngth!
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

It is at least 8 characters long.
It contains both uppercase and lowercase letters.
It contains at least one number.
It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.
*/

function checkStrength(password) {
  let passwordScore = 0;
  const passwordStrength = {
    0: "weak",
    1: "weak",
    2: "medium",
    3: "medium",
    4: "strong",
  };

  const containsUpperAndLower = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  const containsNum = /\d/;
  const containsSpecialChar = /[!@#$%^&\*]/;

  if (password.length >= 8) passwordScore += 1;
  if (containsUpperAndLower.test(password)) passwordScore += 1;
  if (containsNum.test(password)) passwordScore += 1;
  if (containsSpecialChar.test(password)) passwordScore += 1;

  return passwordStrength[passwordScore];
}

console.log(checkStrength("123456")); // "weak"
console.log(checkStrength("pass!!!")); // "weak"
console.log(checkStrength("Qwerty")); // "weak"
console.log(checkStrength("PASSWORD")); // "weak"
console.log(checkStrength("PASSWORD!")); // "medium"
console.log(checkStrength("PassWord%^!")); // "medium"
console.log(checkStrength("qwerty12345")); // "medium"
console.log(checkStrength("S3cur3P@ssw0rd")); // "strong"
console.log(checkStrength("C0d3&Fun!")); // "strong"
