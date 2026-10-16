/*
Email Validator
Given a string, determine if it is a valid email address using the following constraints:

- It must contain exactly one @ symbol.
- The local part (before the @):
    - Can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
    - Cannot start or end with a dot.
- The domain part (after the @):
    - Must contain at least one dot.
    - Must end with a dot followed by at least two letters.
- Neither the local or domain part can have two dots in a row.

Tests:
validate("a@b.cd") should return true.
validate("hell.-w.rld@example.com") should return true.
validate(".b@sh.rc") should return false.
validate("example@test.c0") should return false.
validate("freecodecamp.org") should return false.
validate("develop.ment_user@c0D!NG.R.CKS") should return true.
validate("hello.@wo.rld") should return false.
validate("hello@world..com") should return false.
validate("develop..ment_user@c0D!NG.R.CKS") should return false.
validate("git@commit@push.io") should return false. 
*/

function validateWithRegex(email) {
  // there is no "perfect" email regex
  // this is also very difficult read/maintain and could have lurking bugs that tests didn't catch
  const regex =
    /^[a-zA-Z0-9_%+-]+(?:\.[a-zA-Z0-9_%+-]+)*@[a-zA-Z0-9!_-]+(?:\.[a-zA-Z0-9!_-]+)*\.[a-zA-Z]{2,}$/;

  return regex.test(email);
}

function validate(email) {
  const index = email.indexOf("@");
  if (index === -1 || email.indexOf("@", index + 1) !== -1) return false;

  const local = email.slice(0, index);
  const domain = email.slice(index + 1);

  const rules = {
    local: {
      description: "requirements for local part of email",
      jsFunc: (local) => {
        const charCheck = /^[a-zA-Z0-9._-]+$/;
        const dotCheck = /^(?!\.).*(?<!\.)$/;
        return charCheck.test(local) && dotCheck.test(local);
      },
    },
    domain: {
      description: "requirements for domain part of email",
      jsFunc: (domain) => {
        const containsDot = domain.indexOf(".") !== -1;
        const requiredSuffix = /.[a-zA-Z]{2,}$/.test(domain);
        return containsDot && requiredSuffix;
      },
    },
    global: {
      description: "requirements for local and domain part of email",
      jsFunc: (email) => {
        return email.indexOf("..") === -1;
      },
    },
  };

  const checks = [
    { type: "local", input: local },
    { type: "domain", input: domain },
    { type: "global", input: email },
  ];

  for (let i = 0; i < checks.length; i++) {
    const obj = checks[i];
    const result = rules[`${obj.type}`]["jsFunc"](obj.input);
    if (result === false) return result;
  }

  return true;
}

module.exports = {
  validateWithRegex,
  validate,
};
