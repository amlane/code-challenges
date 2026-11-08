const canPost = require("../canPost.js");

test('canPost("Hello world") should return "short post"', () => {
  expect(canPost("Hello world")).toBe("short post");
});

test('canPost("This is a longer message but still under eighty characters.") should return "long post"', () => {
  expect(
    canPost("This is a longer message but still under eighty characters."),
  ).toBe("long post");
});

test('canPost("This message is too long to fit into either of the character limits for a social media post.") should return "invalid post"', () => {
  expect(
    canPost(
      "This message is too long to fit into either of the character limits for a social media post.",
    ),
  ).toBe("invalid post");
});
