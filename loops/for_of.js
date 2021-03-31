// For .. of Loop
/* 
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    iterable = some collection you want to go through ex... Array or Obj or String

    NOTE: This is better usually for arrays and strings if you want the items.

<keyword>(<var> in <collection>){
    // Do something
}
*/
let students = ['Amy', 'Adam', 'Blake', 'Circe', 'Drew']
for (let student of students){
    console.log(student)
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let letter of alphabet){
    console.log(letter)
}

let person = {
    name: "Dean",
    age: 39
}

for(let entry of Object.defineProperties(person)){
    console.log(`${k}: ${v}`)
}