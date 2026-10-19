const extractAttributes = require("../htmlAttributeExtractor.js");

test('extractAttributes(\'<span class="red"></span>\') should return ["class, red"]', () => {
  expect(extractAttributes('<span class="red"></span>')).toStrictEqual([
    "class, red",
  ]);
});

test('extractAttributes(\'<meta charset="UTF-8" />\') should return ["class, red"]', () => {
  expect(extractAttributes('<meta charset="UTF-8" />')).toStrictEqual([
    "charset, UTF-8",
  ]);
});

test("extractAttributes('<p>Lorem ipsum dolor sit amet</p>') should return []", () => {
  expect(extractAttributes("<p>Lorem ipsum dolor sit amet</p>")).toStrictEqual(
    [],
  );
});

test('extractAttributes(\'<input name="email" type="email" required="true" />\') should return ["name, email", "type, email", "required, true"]', () => {
  expect(
    extractAttributes('<input name="email" type="email" required="true" />'),
  ).toStrictEqual(["name, email", "type, email", "required, true"]);
});

test('extractAttributes(\'<button id="submit" class="btn btn-primary">Submit</button>\') should return ["id, submit", "class, btn btn-primary"]', () => {
  expect(
    extractAttributes(
      '<button id="submit" class="btn btn-primary">Submit</button>',
    ),
  ).toStrictEqual(["id, submit", "class, btn btn-primary"]);
});

test("extractAttributes('<p>1+2=3</p>') should return []", () => {
  expect(extractAttributes("<p>1+2=3</p>")).toStrictEqual([]);
});

test("extractAttributes('<code>&lt;div class=\"container\"&gt;Content&lt;/div&gt;</code>') should return []", () => {
  expect(
    extractAttributes(
      '<code>&lt;div class="container"&gt;Content&lt;/div&gt;</code>',
    ),
  ).toStrictEqual([]);
});
