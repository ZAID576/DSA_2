// Write a function that returns the smallest number in an Array

let arr = [2, 3, 4, 5, 6, 7, 8, 9];

function findSmallestNumber(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let result = findSmallestNumber(arr);
console.log(result);