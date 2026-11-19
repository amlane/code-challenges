/*
100 Characters
Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. If your repetitions go over 100 characters, trim the extra so it's exactly 100.

Tests:
oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
oneHundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".
*/

/*
Alternative approaches

Solution # 1
```
return chars.repeat(Math.floor(100 / chars.length)).padEnd(100, chars);
```

Solution #2
```
return chars.repeat(Math.ceil(100 / chars.length)).slice(0, 100);
```

Time complexity of repeated string concatenation in a loop versus repeat()

Repeated string concatenation has a worst case time complexity of O(n^2). This is because strings are immutable in Js so memory is re-allocated and a copy of the string is made on every iteration as it grows.
Some V8 engines handle this better under the hood but are fragile so this method is still treated with the same algorithmic complexity. 

The built-in repeat method knows the exact final length up front, so it is able to allocate one continguous block of memory for the final string. 

Solution #3
```
  const targetLength = 100;

  return Array.from(
    { length: targetLength },
    (_, i) => chars[i % chars.length],
  ).join("");
  ```

Why "Never Concatenate in a Loop" Is Outdated (Mostly)

The classic advice to push strings into an array and call .join("") at the end, rather than using += in a loop, comes from the era of older engines (like Internet Explorer 7).
• Why it used to be O(N^2). Without ropes, str += chunk copied the entire accumulated string on every single iteration. Building a 10,000-piece string meant copying (1 + 2 + 3 + ... + 10,000) characters.
• In modern engines, like V8 (Chrome/Node.js), SpiderMonkey (Firefox), and JavaScriptCore (Safari/Bun), str += chunk inside a loop simply builds a deep ConsString tree in O(1) per step and flattens it once at the end (O(N) total). In fact, += often beats array.push() + .join("") because it avoids allocating and resizing an intermediate array.
• When the advice still applies:
	• Reading mid-loop. If you inspect the string inside the loop (e.g., checking str.includes(...) or str[0] on every iteration), you force V8 to flatten the rope repeatedly, bringing back O(N^2) performance.
	• Lightweight/embedded engines. Minimalist engines like QuickJS (used in embedded systems and edge runtimes) do not implement string ropes. In QuickJS, += in a large loop still exhibits severe quadratic slowdown, making Array.prototype.join() the safer cross-engine choice if you target constrained environments.

Solution #4 below is a concatenate in a loop approach. 
I would opt for solution 1 or 2 using a variable to hold the magic number 100.
*/

function oneHundred(chars) {
  if (typeof chars !== "string")
    throw new TypeError(`Argument must be a string: ${typeof chars}`);
  if (chars === "") return chars;

  const TARGET_LENGTH = 100;

  let result = "";
  const mult = Math.floor(TARGET_LENGTH / chars.length);
  const remainder = TARGET_LENGTH % chars.length;

  for (let i = 0; i < mult; i++) {
    result += chars;
  }
  result += chars.slice(0, remainder);

  return result;
}

module.exports = oneHundred;
