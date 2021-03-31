//  For loop
/* 
legend:
    keyword = "for"
    1 = a variable to keep track of "iteration" and it's start value
    2 = a condition to check each iteration
    3 = how to modify your variable

<keyword> (<1>;<2>;<3>){
    // what we want to do
}

ex: for(let i = 0; i <= 10; = i+1){
    console.log(i)
}
*/

for(let x = 0; x < 20; x++){
    if(x % 2 == 0){
        console.log(x)
    } else {
        console.log("This is an odd number")
    }
}

myName = "Dean";

for(let i=0; i<myName.length; i++){
    console.log(myName[i])
}

if(myName.length % 2 == 0){
    console.log("You name has an even amount of characters.");
} else {
    console.log("Your name has an odd number of characters")
}