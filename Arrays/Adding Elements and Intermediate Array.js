//Adding Elements and Intermediate Array Techniques 

var output = [];
output.pop; 
//output.pop will take the last item in the array and remove it from the array
output.push(x);
//output.push will add another item to the end of the array 

//FizzBuzz Challenge

var output = [];
var count = 1;

function fizzbuzz(){

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

    count++;
    console.log(output);
}