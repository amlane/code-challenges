/*
Word Search
Given a matrix (an array of arrays) of single letters and a word to find, return the start and end indices of the word in the matrix.

- The given matrix will be filled with all lowercase letters (a-z).
- The word to find will always be in the matrix exactly once.
- The word to find will always be in a straight line in one of these directions:
    - left to right
    - right to left
    - top to bottom
    - bottom to top

For example, given the matrix:

[
  ["a", "c", "t"],
  ["t", "a", "t"],
  ["c", "t", "c"]
]

And the word "cat", return: [[0, 1], [2, 1]]

Where [0, 1] are the indices for the "c" (start of the word), and [2, 1] are the indices for the "t" (end of the word).

Tests:
findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], "cat") should return [[0, 1], [2, 1]].
findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], "dog") should return [[0, 0], [0, 2]].
findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], "fish") should return [[3, 3], [0, 3]].
findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], "fox") should return [[1, 3], [1, 1]].
*/

function findWord(matrix, word) {
  // turn matrix into arrays of strings
  // then iterate over lists to check for substring match
  // when match is found, construct coordinates based on direction (row/row rev/col/col rev)

  let revWord = word.split("").reverse().join("");
  const row = matrix.join("*").replaceAll(",", "").split("*");

  // construct column list
  let column = [];
  let rowLen = row[0].length;
  for (let i = 0; i < row.length; i++) {
    let word = "";
    for (let j = 0; j < rowLen; j++) {
      word += row[j][i];
      if (j == rowLen - 1) column.push(word);
    }
  }

  for (let i = 0; i < column.length; i++) {
    if (column[i].indexOf(revWord) !== -1) {
      return [
        [column[i].indexOf(revWord) + word.length - 1, i],
        [column[i].indexOf(revWord), i],
      ];
    }
    if (column[i].indexOf(word) !== -1) {
      return [
        [column[i].indexOf(word), i],
        [column[i].indexOf(word) + word.length - 1, i],
      ];
    }
    if (row[i].indexOf(revWord) !== -1) {
      return [
        [row[i].indexOf(revWord), i + word.length - 1],
        [row[i].indexOf(revWord), i],
      ];
    }
    if (row[i].indexOf(word) !== -1) {
      return [
        [i, row[i].indexOf(word)],
        [i, row[i].indexOf(word) + word.length - 1],
      ];
    }
  }
}

module.exports = findWord;
