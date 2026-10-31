/*
Nth Prime
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

Tests:
nthPrime(5) should return 11.
nthPrime(10) should return 29.
nthPrime(16) should return 53.
nthPrime(99) should return 523.
nthPrime(1000) should return 7919.
*/

function nthPrime(n) {
  // Using The Sieve of Eratosthenes

  const numberList = [2];
  let currCand = 3;

  while (n > numberList.length) {
    // modulos every number in numberList against currCand to see if anything returns anything besides 0
    // if returns anything besides 0 for every number, the number is prime
    let hasRemainder = true;
    for (let i = 0; i < numberList.length; i++) {
      if (currCand % numberList[i] === 0) {
        hasRemainder = false;
      }
    }
    if (hasRemainder) numberList.push(currCand);
    currCand++;
  }

  return numberList.pop();
}

module.exports = nthPrime;
