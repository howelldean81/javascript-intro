// name(data) --> data out
// f(x) = x * x // sqr function
/* 
Way one:
<keyword> <yourName>(<what i need to work>) */
    // What I do
    // return (something>// what I wnt to give back)


// Two ways to write a function in js
function sqr(x){
    return x * x
}

console.log(sqr(5))

// let result = sqr(5)
// console.log(result)

let aSqr = (x) => {
    return x * x // Explicit return
}

let bSqr = (x) => x * x
let cSqr = x => x * x // Implicit return

function betterGreet(fName){
    console.log("Hello " + fName)
}

let createFullName = (fName, lName) => {
    return `${fName}` ${lName}
}
