/*
What's My Age Again?
Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.

Tests:
calculateAge("2000-11-20") should return 25.
calculateAge("2000-12-01") should return 24.
calculateAge("2014-10-25") should return 11.
calculateAge("1994-01-06") should return 31.
calculateAge("1994-12-14") should return 30.
*/

function calculateAge(birthday) {
  if (typeof birthday !== "string")
    throw new TypeError(
      `calculateAge expects string. Received ${String(birthday)} ${typeof birthday}`,
    );
  if (!isValidDate(birthday))
    throw new Error(
      `Invalid date/format.  calculateAge expects a string with date format YYYY-MM-DD`,
    );

  // return age as of November 27th, 2025
  const rawAge = 2025 - Number(birthday.slice(0, 4));
  const mmddDiff = Number(birthday.slice(5).replaceAll("-", "")) - 1127;
  const offset = mmddDiff > 0 ? 1 : 0;

  return rawAge - offset;
}

function isValidDate(dateString) {
  // checks valid format YYYY-MM-DD
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  // Firefox and Safari return an Invalid Date for new Date("2026-02-31"). In those engines, .toISOString() on an Invalid Date throws RangeError: invalid time value
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return false;

  // checks is a valid date (e.g. 2026-02-31 would convert to 2026-03-03) in Node and Chrome (V8)
  return new Date(dateString).toISOString().slice(0, 10) === dateString;
}

module.exports = calculateAge;
