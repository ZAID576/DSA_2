// Check whether the number is Palindrome

function isPalindromeNumber(num) {
  if (num < 0) {
    return false;
  }                                       // "Negative Edge case handling"

  let n = num;
  let r = 0;

  while (num > 0) {
    let digit = num % 10;                 // get the last digit
    r = r * 10 + digit;                   // add it to the reversed number
    num = Math.floor(num / 10);           // remove the last digit
  }

  return r === n;
}

console.log(isPalindromeNumber(121));  // true
console.log(isPalindromeNumber(123));  // false
console.log(isPalindromeNumber(-121)); // false
