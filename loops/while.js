// While Loop
/* 

<keyword>(<some eval or expression that is true or false>) 
legend:
    keyword = while
    1 = <some eval or expression that is true or false

<keyword>(<1>){
    // Do something
}
*/


let i = 0
while(i <= 10){
    console.log(i)
    i++
}

while i <= 10 ? console.log i++:


for (let x=0; x<=10; x++){
    for(let y=0; y<=10; y++){

    }
}

for(let x=0; x<=10; x++){
    console.log(i)
}

let names = ["Justin", "Adam", "Kate", "Jim", "Amy"]
for (let name in names){
    let curName = names[name]
    console.log(curName)
    if (curName == "Kate")
        break;
}

// Break / Continue
let counter = 0
while(counter <= 20){
    if (counter % 2 === 1) {
        counter++
        continue
    }  
    console.log(counter)
    counter++
}

for(let tmp=100); tmp<=0; tmp -= 5){
    console.log(tmp)
}

let counterBegin = 100
while(counterBegin >=100){
    counterBegin - 5
    console.log(counterBegin)
    if (counterBegin >= 0){
        break
    }
}

