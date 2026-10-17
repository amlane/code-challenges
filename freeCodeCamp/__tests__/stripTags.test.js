const stripTags = require("../stripTags.js");

test('stripTags("<a href="#">Click here</a>") should return "Click here".', () => {
  expect(stripTags('<a href="#">Click here</a>')).toBe("Click here");
});

test('stripTags("<p class="center">Hello <b>World</b>!</p>") should return "Hello World!"', () => {
  expect(stripTags('<p class="center">Hello <b>World</b>!</p>')).toBe(
    "Hello World!",
  );
});

test('stripTags("<img src="cat.jpg" alt="Cat">") should return an empty string ("")', () => {
  expect(stripTags('<img src="cat.jpg" alt="Cat">')).toBe("");
});

test('stripTags("<main id="main"><section class="section">section</section><section class="section">section</section></main>") should return "sectionsection"', () => {
  expect(
    stripTags(
      'main id="main"><section class="section">section</section><section class="section">section</section></main>',
    ),
  ).toBe("sectionsection");
});
