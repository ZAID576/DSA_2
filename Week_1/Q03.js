// Calculating Square of a number using function



//1st way
function square(a){
    console.log(a*a)
}

square(10)



//2nd way ["return" ka use kiya gaya hai yaha per ]
function square(a){
    let result = (a*a)

    return result
}

let value = square(10)
console.log(value)