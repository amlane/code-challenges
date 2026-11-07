/*
Counting Cards
A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

- Order does not matter. Picking card A then card B is the same as picking card B then card A.

For example, given 52, return 1. There's only one combination of 52 cards to pick from a 52 card deck. And given 2, return 1326, There's 1326 card combinations you can end up with when picking 2 cards from the deck.

Tests:
combinations(52) should return 1.
combinations(1) should return 52.
combinations(2) should return 1326.
combinations(5) should return 2598960.
combinations(10) should return 15820024220.
combinations(50) should return 1326.
*/

/*

The combination formula: 
C(n, r) = n! / (r! * (n - r)!)

- n is the total number of cards in the deck
- r is the number of cards you can choose

--- 

Rather than calculating a massive factorial, you can optimize it by canceling out the factorial from the top/bottom.
In this case that would look like this: 
52 * 51 * 50 * 49 * 48 * (47!) / 5 * 4 * 3 * 2 * 1 * (47!)
Where (47!) is canceled out from the top and bottom.

Let's walk through an optimized equation example, combinations(5).

1. You would subtract 5 from 52, leaving you with 47.
2. Then you would multiple n by it's decrement, until you reach that number: 52 * 51 * 50 * 49 * 48 = 311,875,200
3. Then you would muliple r by it's decrement until you reach 1: 5 * 4 * 3 * 2 * 1 = 120
4. Then you would divide 311,875,200 / 120 to get your final result of 2598960 unique combinations.

Here is what the original formula would look like if you didn't optimize: 52! / 2!(52 - 2)!
This would require you to calculate the factorial of 52 which requires you to multiply every number from 52 to 1.

In Python, there is a built in import from the math lib that handles this equation.

```python
import math

def count_combinations(n, r):
    return math.comb(n, r)

print(count_combinations(52, 2))
```
Documentation: https://docs.python.org/3/library/math.integer.html#math.integer.comb
*/

function combinations(cards) {
  // Uses the "Combinations formula" (often called "(n) choose (r)").
  const n = 52; // total number of cards in deck
  let r = cards; // total number of options
  if (r > n) return 0;
  // Mathematically, having 0 cards to pick results in 1 unique set (the empty set)
  // that would be an implementation decision and there were no test cases available to determine expected output
  if (r === 0 || r === n) return 1;

  // Optimize: C(n, r) is the same as C(n, n - r)
  if (r > n - r) r = n - r;

  let result = 1;
  for (let i = 1; i <= r; i++) {
    result *= n - r + i;
    result /= i;
  }
  return result;
}

module.exports = combinations;
