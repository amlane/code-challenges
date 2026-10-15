/*
Tests:
goldilocksZone(1) should return [0.95, 1.37].
goldilocksZone(0.5) should return [0.28, 0.41].
goldilocksZone(6) should return [21.85, 31.51].
goldilocksZone(3.7) should return [9.38, 13.52].
goldilocksZone(20) should return [179.69, 259.13].
*/

const goldilocksZone = require("../goldilocksZone.js");

test("Input of 1 should return [0.95, 1.37]", () => {
  expect(goldilocksZone(1)).toStrictEqual([0.95, 1.37]);
});

test("Input of 0.5 should return [0.28, 0.41]", () => {
  expect(goldilocksZone(0.5)).toStrictEqual([0.28, 0.41]);
});

test("Input of 6 should return [21.85, 31.51]", () => {
  expect(goldilocksZone(6)).toStrictEqual([21.85, 31.51]);
});

test("Input of 3.7 should return [9.38, 13.52]", () => {
  expect(goldilocksZone(3.7)).toStrictEqual([9.38, 13.52]);
});

test("Input of 20 should return [179.69, 259.13]", () => {
  expect(goldilocksZone(20)).toStrictEqual([179.69, 259.13]);
});
