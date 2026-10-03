// Write a function that returns the largest number in an Array

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2];

function findLargestNumber(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let result = findLargestNumber(arr);
console.log(result);




// Better Approach

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2];

function findLargestNumber(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let result = findLargestNumber(arr);
console.log(result);

