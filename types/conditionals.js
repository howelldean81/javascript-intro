// conditional statements

/* 
Conditionals are used to execute a piece of code if a condition is true. They allow our code to make decisions and carry out actions based on those decisions. 
*/

// -if statements
// -switches
//  -ternaries

// if statements

let mathResult = 2 + 2 === 5;
console.log(mathResult);

if (mathResult) console.log('This equates to true');

// Block Body + Else

if(mathResult) {
    console.log('This equates to true');

} else {
    console.log('This equates to false');
}

// Chaining if/else statements
// else ifs allow us to provide a new condition to test if the conditions above are not met.

// // Order matters
// let tempF = 55;

// if(tempF > 95) {
//     console.log("It's hot!");
// } else if(tempF > 50) {
//     console.log(It's warm!);
// } else if(tempF > 32) {
//     console.log(It's chilly!);
// } else{
//     console.log("I cannot provide the weather..");
// }

// Testing multiple conditions

// let(myName === 'Dean'){
//     console.log('Name Logged');
// } else if(age === 29) {
//     console.log('Age Logged');
// } else if(myName === 'Dean' && age === 2)

// Switches
// Run a block of code based on different cases.

let tempF = 72;
