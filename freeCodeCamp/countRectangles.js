/*
Rectangle Count
Given two positive integers representing the width and height of a rectangle, determine how many rectangles can fit in the given one.

Only count rectangles with integer width and height.
For example, given 1 and 3, return 6. Three 1x1 rectangles, two 1x2 rectangles, and one 1x3 rectangle.

Tests:
countRectangles(1, 3) should return 6.
countRectangles(3, 2) should return 18.
countRectangles(1, 2) should return 3.
countRectangles(5, 4) should return 150.
countRectangles(11, 19) should return 12540.
*/

/*
When you walk through an example manually, you'll see a pattern where the dimensions increment from 1 to total width/height. 

3 x 2 rectangle example:

[][][]
[][][]

The dimensions that will fit along with the total number:
1 x 1 = 6
1 x 2 = 3
2 x 1 = 4
2 x 2 = 2
3 x 1 = 2
3 x 2 = 1
Total = 18

Instead of manually checking how many times each subrectangle can fit into the larger rectangle, we can step through how to solve this with 2 algorithms. 

The first algorithm is how to determine number of subrectangles within a large rectangle. 
This is done by multiplying the sum of n integers for width x height. 

For our 3 x 2 rectangle, that would look like this:
  • Width: 1 + 2 + 3 = 6
  • Height: 1 + 2 = 3
  • Total num: 6 * 3 = 18

This is already an optimal approach compared to the brute force alternative (see below), however, we can optimize this further. 
Rather than calculating each integer from 1 to n, you can use an algorithm to get the total sum of N integers: 
n(n + 1) / 2

Coming back to the example above that would look like:
  • Width: 3(3+1)/2 = 6
  • Height: 2(2+1)/2  = 3
  • Total num: 6 * 3 = 18
*/

function countRectangles(width, height) {
  function sumOfN(n) {
    return (n * (n + 1)) / 2;
  }

  return sumOfN(width) * sumOfN(height);
}

/*
Brute Force Solution

function countRectangles(width, height) {
  let total = 0;

  for (let i = 1; i <= width; i++) {
    for (let j = 1; j <= height; j++) {
      total += (height - j + 1) * (width - i + 1);
    }
  }

  return total;
}
*/

module.exports = countRectangles;
