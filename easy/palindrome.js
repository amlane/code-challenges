/* 
Give an integer `n` return true if it is a palindrome, false if it isn't.

Algorithm used: Two Pointers

Two-Pointers technique is a strategy using 2 indices to traverse a data structure, either towards each other or in the same direction to solve a problem more efficiently.

Follow up: Could you solve it without converting the integer to a string?
*/


var isPalindrome = function(x){
   const target = x.toString();
   const strLen = target.length - 1;

   for(let i = 0; i <= Math.floor(strLen / 2); i++){
      if(target[i] !== target[strLen - i]){
         return false;
      }
   }

   return true;
};

// console.log(isPalindrome(121)) // true
// console.log(isPalindrome(-121)) // false
// console.log(isPalindrome(1213)) // false
// console.log(isPalindrome(12321)) // true
// console.log(isPalindrome(12345678900987654321n)) // true - due JavaScript's limitation with large numbers, arguments exceeding 9,007,199,254,740,991 (Js's MAX_SAFE_INTEGER) must be passed with n to avoid rounding/loss of precision


var isPalindromeNoString = function(x){
    if(x < 0) return false;

    let num = x;
    let reversed = 0;

    while(num > 0){
      const lastDigit = num % 10;
      reversed = (reversed * 10) + lastDigit;
      num = Math.floor(num / 10);
    }
    
    return reversed === x;
}

console.log(isPalindromeNoString(121)) // true
console.log(isPalindromeNoString(-121)) // false
console.log(isPalindromeNoString(1213)) // false
console.log(isPalindromeNoString(12321)) // true