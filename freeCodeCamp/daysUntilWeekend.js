/*
Is It the Weekend?
Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

Tests:
daysUntilWeekend("2025-11-14") should return "1 day until the weekend.".
daysUntilWeekend("2025-01-01") should return "3 days until the weekend.".
daysUntilWeekend("2025-12-06") should return "It's the weekend!".
daysUntilWeekend("2026-01-27") should return "4 days until the weekend.".
daysUntilWeekend("2026-09-07") should return "5 days until the weekend.".
daysUntilWeekend("2026-11-29") should return "It's the weekend!".

JavaScript's built-in method Date.prototype.getDay() returns 0-6 for Sun - Sat.
However, if you're passing an ISO date without a time, getDay will default to using UTC at midnight, which might return the previous day for timezones behind UTC. 
To handle that, you could either use getUTCDay() or include a local time to ensure you're returning the accurate day. 
*/

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

function daysUntilWeekend(dateString) {
  if (!isValidDate(dateString))
    throw new Error("Invalid input. Date format required 'YYYY-MM-DD'");

  const dayNum = new Date(dateString).getUTCDay();
  if (dayNum === 0 || dayNum === 6) return "It's the weekend!";

  const daysRemaining = 6 - dayNum;
  return `${daysRemaining} ${daysRemaining === 1 ? "day" : "days"} until the weekend.`;
}

/*
Approach using Sakamato's algorithm
This is not the approach I would use, as it's trading off readability for no real gain in performance.
However, the real risk with using this approach is greater, as the built-in method relies on the engine's calendar logic, which has been tested by millions of users.
But it is fun to learn alternative solutions without using built-in methods.
*/

/*
function getDayOfWeek(year, month, day) {
  let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];

  if (month < 3) {
    year -= 1;
  }

  return (
    (year +
      Math.floor(year / 4) -
      Math.floor(year / 100) +
      Math.floor(year / 400) +
      t[month - 1] +
      day) %
    7
  );
}

function daysUntilWeekend(dateString) {
  const date = dateString.split("-").map(Number);
  const day = 6 - getDayOfWeek(date[0], date[1], date[2]);

  if (day === 0 || day === 6) return "It's the weekend!";
  return `${day} ${day === 1 ? "day" : "days"} until the weekend.`;
}
*/

module.exports = daysUntilWeekend;
