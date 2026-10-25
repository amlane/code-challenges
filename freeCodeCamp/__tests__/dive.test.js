const dive = require("../dive.js");

test('dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 1]) should return "Recovered"', () => {
  expect(
    dive(
      [
        ["-", "X"],
        ["-", "X"],
        ["-", "O"],
      ],
      [2, 1],
    ),
  ).toBe("Recovered");
});

test('dive([[ "-", "X"], [ "-", "X"], [ "-", "O"]], [2, 0]) should return "Empty"', () => {
  expect(
    dive(
      [
        ["-", "X"],
        ["-", "X"],
        ["-", "O"],
      ],
      [2, 0],
    ),
  ).toBe("Empty");
});

test('dive([[ "-", "X"], [ "-", "O"], [ "-", "O"]], [1, 1]) should return "Found"', () => {
  expect(
    dive(
      [
        ["-", "X"],
        ["-", "O"],
        ["-", "O"],
      ],
      [1, 1],
    ),
  ).toBe("Found");
});

test('dive([[ "-", "-", "-"], [ "X", "O", "X"], [ "-", "-", "-"]], [1, 2]) should return "Found"', () => {
  expect(
    dive(
      [
        ["-", "-", "-"],
        ["X", "O", "X"],
        ["-", "-", "-"],
      ],
      [1, 2],
    ),
  ).toBe("Found");
});

test('dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [2, 0]) should return "Recovered"', () => {
  expect(
    dive(
      [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["O", "X", "X"],
      ],
      [2, 0],
    ),
  ).toBe("Recovered");
});

test('dive([[ "-", "-", "-"], [ "-", "-", "-"], [ "O", "X", "X"]], [1, 2]) should return "Empty"', () => {
  expect(
    dive(
      [
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["O", "X", "X"],
      ],
      [1, 2],
    ),
  ).toBe("Empty");
});
