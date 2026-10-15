/* 
24 to 12
Given a string representing a time of the day in the 24-hour format of "HHMM", return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".

The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".

Tests:
to12("1124") should return "11:24 AM".
to12("0900") should return "9:00 AM".
to12("1455") should return "2:55 PM".
to12("2346") should return "11:46 PM".
to12("0030") should return "12:30 AM".
*/

function to12(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(2, 4);
  const meridian = hours >= 12 ? "PM" : "AM";

  if (hours === 0) hours += 12;
  if (hours > 12) hours -= 12;

  return `${hours}:${minutes} ${meridian}`;
}

module.exports = to12;
