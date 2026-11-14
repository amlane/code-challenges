/*
Array Shift
Given an array and an integer representing how many positions to shift the array, return the shifted array.

A positive integer shifts the array to the left.
A negative integer shifts the array to the right.
The shift wraps around the array.
For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].

Tests:
shiftArray([1, 2, 3], 1) should return [2, 3, 1].
shiftArray([1, 2, 3], -1) should return [3, 1, 2].
shiftArray(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"].
shiftArray(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"].
shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].
*/

/*
In JavaScript, arrays aren't fixed-size allotments. Engines like V8 use dynamic backing stores with spare capacity, so push is amortized O(1) and only occasionally reallocates. The real cost problem is shift(). Removing from the front of an array can require moving every remaining element. Engines have tricks to soften this, but you can't rely on them. So doing shift/push n times is O(n x k), whereas the approach below is O(n).

function shiftArray(arr, n) {
  if (arr.length === 0) return [];

  const positiveInt = Math.round(Math.abs(n));
  const isPositive = n === positiveInt;
  const index = positiveInt % arr.length;

  if (isPositive) {
    return arr.slice(index).concat(arr.slice(0, index));
  } else {
    return arr
      .slice(arr.length - index)
      .concat(arr.slice(0, arr.length - index));
  }
}
*/

// More optimal solution, removing the need for positive/negative branching by normalizing shift into a single left-shift offset

function shiftArray(arr, n) {
  if (arr.length === 0) return [];

  const offset = ((n % arr.length) + arr.length) % arr.length;

  return arr.slice(offset).concat(arr.slice(0, offset));
}

module.exports = shiftArray;
