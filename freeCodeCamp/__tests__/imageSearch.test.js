const imageSearch = require("../imageSearch.js");

test('imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog") should return ["dog.png"]', () => {
  expect(
    imageSearch(["dog.png", "cat.jpg", "parrot.jpeg"], "dog"),
  ).toStrictEqual(["dog.png"]);
});

test('imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun") should return ["Sunset.jpg", "sunflower.jpeg"]', () => {
  expect(
    imageSearch(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"),
  ).toStrictEqual(["Sunset.jpg", "sunflower.jpeg"]);
});

test('imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG") should return ["Moon.png", "stars.png"]', () => {
  expect(
    imageSearch(["Moon.png", "sun.jpeg", "stars.png"], "PNG"),
  ).toStrictEqual(["Moon.png", "stars.png"]);
});

test('imageSearch(["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"], "Cat") should return ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]', () => {
  expect(
    imageSearch(
      [
        "cat.jpg",
        "dogToy.jpeg",
        "kitty-cat.png",
        "catNip.jpeg",
        "franken_cat.gif",
      ],
      "Cat",
    ),
  ).toStrictEqual([
    "cat.jpg",
    "kitty-cat.png",
    "catNip.jpeg",
    "franken_cat.gif",
  ]);
});
