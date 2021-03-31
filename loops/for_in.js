// For .. un Loop
/* 
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    iterable = some collection you want to go through ex... Array or Obj or String

<keyword>(<var> in <collection>){
    // Do something
}
*/
let person = {
    name: "Dean",
    age: 39
}
//  A look ahead
console.log(person.name)
console.log(person["name"])

for(let property in person){
    console.log(property)
    console.log(person[property]) // A good use of a for loop
}

let randomNums = [1, 9, 30, 31, 11, 29, 53]
for(let rand in randomNums){
    // console.log(rand)
    if(rand % 2 === 0){
        console.log(randomNums[rand])
    }
}

let fullName = "Dean Howell"
die (let letterId in fullName[letterId]){
    console.log(fullName[letterId])
}
    