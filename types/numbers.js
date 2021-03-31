let x = 5
let y = 5.0
let z = Number('5')
let r = Number('test')
// let cov_numb = Number(str_numb) // Creates a number from a string

console.table({x, y, z, r})

/* 
Numbers:
Add?        +
Multi       *
Div         /
Sub         -
Floot Div   Math.floor(x / y)
Exp         **

MOD         % Divides and gives back the remainder
*/

console.log(8 ** 2)
console.log(Math.floor(12 / 5))

let total = 0
let i = 0
while(i <= 100){
    if(i % 2 == 0)
        console.log(i)
        total += i
    }
    i+++   
}

console.log(total)