//Fibonacci Code Challenge


function fibonacciCode(n){

    var output = []; //Create Array

    //Have to have if statements for first two values as they are pre-determined, cannot be calculated

    if(n === 1){    //If statement to output 0 in the array if n is equal to 1
        output = [0];
    }
    else if(n === 2){  //If-Else statement to output 0, 1 in the array if n is equal to 2 
        output = [0, 1];
    }

    else{
        output = [0, 1];
        for(var i = 2; i < n; i++){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }

    return output; //Return the result
}

output = fibonacciCode(); 
console.log(output);