//For Loops
//Similar to while loops but instead of testing a condition, we specify how many times we want the loop to run

//i=0 is the start
//i=2 is the end
//i++ is the change
//Will loop through from 0 to 2 and execute code inside on each loop
for (i=0; i=2; i++){
    //Do Something
    console.log(i);
}

//For loop is basically a reshuffling of a while loop

for (var i = 1; i < 4; i++){
    console.log(i);
}

//FizzBuzz code with a for loop 
var output = [];

function fizzbuzz(){

    for(var count = 1; count < 101; count++){
    if(count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    } 
    
    else if(count % 3 === 0){
        output.push("Fizz");
    }

    else if(count % 5 === 0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }

    console.log(output);
    }
}

//When to use:
//While Loop: Runs a piece of code whilst a condition is true and will keep running until that condition becomes false.
//For Loop: You're trying to iterate. You're trying to run a piece of code many times and a for loop allows you to specify how many times