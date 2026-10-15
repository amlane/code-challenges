/*
Space Week Day 6: Moon Phase
For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

- "New": days 1 - 7
- "Waxing": days 8 - 14
- "Full": days 15 - 21
- "Waning": days 22 - 28

After day 28, the cycle repeats with day 1, a new moon.

- Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
- You will not be given any dates before the reference date.
- Return the correct phase as a string.

Note: Day 1 represents the day of the new moon, meaning 0 days have passed since the last new moon.

Tests:
moonPhase("2000-01-12") should return "New".
moonPhase("2000-01-13") should return "Waxing".
moonPhase("2014-10-15") should return "Full".
moonPhase("2012-10-21") should return "Waning".
moonPhase("2022-12-14") should return "New".
*/

function getDaysBetweenDates(date1Str, date2Str) {
  const startDate = new Date(date1Str);
  const endDate = new Date(date2Str);

  const msPerDay = 1000 * 60 * 60 * 24;

  const diff = Math.abs(endDate - startDate);

  return Math.round(diff / msPerDay);
}

function moonPhase(dateString) {
  // magic date: 2000-01-06 is reference point for day 1 of the new moon cycle
  const daysSinceRef = getDaysBetweenDates("2000-01-05", dateString);

  const cycle = daysSinceRef % 28;

  if (cycle >= 22 || cycle === 0) return "Waning";
  if (cycle >= 15) return "Full";
  if (cycle >= 8) return "Waxing";
  if (cycle >= 1) return "New";
}

module.exports = moonPhase;
