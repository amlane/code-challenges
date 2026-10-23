const favoriteSongs = require("../favoriteSongs.js");

test('favoriteSongs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]) should return ["Sync or Swim", "Earbud Blues"]', () => {
  expect(
    favoriteSongs([
      { title: "Sync or Swim", plays: 3 },
      { title: "Byte Me", plays: 1 },
      { title: "Earbud Blues", plays: 2 },
    ]),
  ).toStrictEqual(["Sync or Swim", "Earbud Blues"]);
});

test('favoriteSongs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]) should return ["Clickwheel Love", "99 Downloads"]', () => {
  expect(
    favoriteSongs([
      { title: "Skip Track", plays: 98 },
      { title: "99 Downloads", plays: 99 },
      { title: "Clickwheel Love", plays: 100 },
    ]),
  ).toStrictEqual(["Clickwheel Love", "99 Downloads"]);
});

test('favoriteSongs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]) should return ["Song B", "Song C"]', () => {
  expect(
    favoriteSongs([
      { title: "Song A", plays: 42 },
      { title: "Song B", plays: 99 },
      { title: "Song C", plays: 75 },
    ]),
  ).toStrictEqual(["Song B", "Song C"]);
});
