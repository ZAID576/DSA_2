// Check whether the number is Palindrome

function isPalindromeNumber(num) {
  if (num < 0) {
    return false;
  }

  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;                 // get the last digit
    reversed = reversed * 10 + digit;     // add it to the reversed number
    num = Math.floor(num / 10);           // remove the last digit
  }

  return reversed === original;
}

console.log(isPalindromeNumber(121));  // true
console.log(isPalindromeNumber(123));  // false
console.log(isPalindromeNumber(-121)); // false




// Palindrome Checker

function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (reversed === str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false
