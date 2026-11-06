/*
Matrix Builder
Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

[
  [0, 0, 0],
  [0, 0, 0]
]

Tests:
buildMatrix(2, 3) should return [[0, 0, 0], [0, 0, 0]].
buildMatrix(3, 2) should return [[0, 0], [0, 0], [0, 0]].
buildMatrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
buildMatrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].
*/

function buildMatrix(rows, cols) {
  const columnTemplate = [];
  const result = [];
  for (let i = 0; i < cols; i++) {
    columnTemplate.push(0);
  }
  for (let j = 0; j < rows; j++) {
    result.push(columnTemplate);
  }
  return result;
}

module.exports = buildMatrix;
