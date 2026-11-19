const convert = require("../convert.js");

test('convert("# My level 1 heading") should return "<h1>My level 1 heading</h1>"', () => {
  expect(convert("# My level 1 heading")).toBe("<h1>My level 1 heading</h1>");
});

test('convert("My heading") should return "Invalid format"', () => {
  expect(convert("My heading")).toBe("Invalid format");
});

test('convert("##### My level 5 heading") should return "<h5>My level 5 heading</h5>"', () => {
  expect(convert("##### My level 5 heading")).toBe(
    "<h5>My level 5 heading</h5>",
  );
});

test('convert("#My heading") should return "Invalid format"', () => {
  expect(convert("#My heading")).toBe("Invalid format");
});

test('convert("  ###  My level 3 heading") should return "<h3>My level 3 heading</h3>"', () => {
  expect(convert("  ###  My level 3 heading")).toBe(
    "<h3>My level 3 heading</h3>",
  );
});

test('convert("####### My level 7 heading") should return "Invalid format"', () => {
  expect(convert("####### My level 7 heading")).toBe("Invalid format");
});

test('convert("## My #2 heading") should return "<h2>My #2 heading</h2>"', () => {
  expect(convert("## My #2 heading")).toBe("<h2>My #2 heading</h2>");
});
