const wiseSpeak = require("../wiseSpeak.js");

test('wiseSpeak("You must speak wisely.") should return "Speak wisely, you must."', () => {
  expect(wiseSpeak("You must speak wisely.")).toBe("Speak wisely, you must.");
});

test('wiseSpeak("You can do it!") should return "Do it, you can!"', () => {
  expect(wiseSpeak("You can do it!")).toBe("Do it, you can!");
});

test('wiseSpeak("Do you think you will complete this?") should return "Complete this, do you think you will?"', () => {
  expect(wiseSpeak("Do you think you will complete this?")).toBe(
    "Complete this, do you think you will?",
  );
});

test('wiseSpeak("All your base are belong to us.") should return "Belong to us, all your base are."', () => {
  expect(wiseSpeak("All your base are belong to us.")).toBe(
    "Belong to us, all your base are.",
  );
});

test('wiseSpeak("You have much to learn.") should return "Much to learn, you have."', () => {
  expect(wiseSpeak("You have much to learn.")).toBe("Much to learn, you have.");
});
