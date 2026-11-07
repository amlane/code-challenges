/*
Weekday Finder
Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Be sure to ignore time zones.

Tests:
getWeekday("2025-11-06") should return "Thursday".
getWeekday("1999-12-31") should return "Friday".
getWeekday("1111-11-11") should return "Saturday".
getWeekday("2112-12-21") should return "Wednesday".
getWeekday("2345-10-01") should return "Monday".
*/

// Solution 1
// function getWeekday(dateString) {
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   return days[new Date(dateString).getUTCDay()];
// }

// Solution 2
function getWeekday(dateString) {
  const options = { weekday: "long", timeZone: "UTC" };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
}

module.exports = getWeekday;
