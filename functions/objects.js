// Objects

/* 
syntax:

    {
        k1: v1,
        k2: v2
    }

keys can be in "" but don't have to be if they are valid var names,
i.e they don't start with a "number" or have invalid chars, or has spaces
*/
let obj1 = {
    name: "Dean"
}

let obj2 = {
    "name": "Amit"
}
// There are two ways to get things out of objects "Dot" notation and
// "square bracket" notation

console.log(obj1)
console.log(obj1["name"])

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    miles: 10_000,
    owners: ["Amy", "Josh"]
}

console.log(car.miles);
console.log(car["miles"])
console.log(car.owners[0]) // Objects can hold more than just a primitive type

let person = {
    fName: "Justin",
    lName: "Ahmann",
    fullName: function(){
        return `${this,fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fname}`
    }
}

console.log(person.fName)
console.log(person.fullName())
console.log(person.greet("Hello"))

let builderObj = {} // An Empty obj
console.log(builderObj);
builderObj.name = "Dean"
builderObj["age"] = 39
builderObj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
console.log(builderObj)
}

//  A look ahead at STACKS and QUEUES <+ we can build these with objects
// Stacks are LIFO (last in first out)
// Queues are FIFO (first in first out)
?oop object oriented programming
class Dog {
    constructor(breed, age){
        this.breed = breed
        this.age = age
    }
    bark = function(){
        return 'The ' + this.breed + ' Barks!'
    }
}

let fido = new Dog("lab", 25)
let dogs = [new Dog("lab", 25), new Dog("corgi", 25)]
dogs.forEach(dog => console.log(dog.bark()))