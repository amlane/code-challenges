const getExtension = require("../getExtension.js");

test('getExtension("document.txt") should return "txt"', () => {
  expect(getExtension("document.txt")).toBe("txt");
});

test('getExtension("README") should return "none"', () => {
  expect(getExtension("README")).toBe("none");
});

test('getExtension("image.PNG") should return "PNG"', () => {
  expect(getExtension("image.PNG")).toBe("PNG");
});

test('getExtension(".gitignore") should return "gitignore"', () => {
  expect(getExtension(".gitignore")).toBe("gitignore");
});

test('getExtension("archive.tar.gz") should return "gz"', () => {
  expect(getExtension("archive.tar.gz")).toBe("gz");
});

test('getExtension("final.draft.") should return "none". ', () => {
  expect(getExtension("final.draft.")).toBe("none");
});
