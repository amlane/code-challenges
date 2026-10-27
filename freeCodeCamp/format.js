/*
Duration Formatter
Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

- Seconds: Should always be two digits.
- Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
- Hours: Should be included only if they're greater than zero.

Tests:
format(500) should return "8:20".
format(4000) should return "1:06:40".
format(1) should return "0:01".
format(5555) should return "1:32:35".
format(99999) should return "27:46:39".

H:MM:SS
how many seconds in a minute === 60
how many seconds in an hour = 60 * 60 = 3600 seconds

4000 / 3600 = 1.11111 (round to 1)
400 / 60 = 6 
40 seconds remaining 

5555 / 3600 = 1
1955 / 60 = 32
60 * 32 = 1920
1955 - 1920 = 35 seconds 

1:32:35

*/

function format(seconds) {
  let hourCount = 0;
  let minuteCount = 0;

  let result = "";

  if (seconds > 3600) {
    hourCount = Math.floor(seconds / 3600);
    seconds = seconds - 3600 * hourCount;
    result += `${hourCount}:`;
  }
  if (seconds > 60) {
    minuteCount = Math.floor(seconds / 60).toString();
    seconds = seconds - 60 * minuteCount;
    const finalNum =
      minuteCount.length === 1 && hourCount > 0
        ? `0${minuteCount}:`
        : `${minuteCount}:`;
    result += finalNum;
  }
  if (minuteCount === 0) result += `0:`;
  if (seconds.toString().length === 1) result += "0";
  result += `${seconds}`;

  return result;
}

module.exports = format;
