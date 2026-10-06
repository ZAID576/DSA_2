// Write a function that returns the count of digits in a number


function countDigits(n){
    let count = 0;
    while(n>0){
        n = Math.floor(n/10)
        count++
    }
    return count;
}


let result = countDigits(646549)
console.log(result)