//While Loops
//For if we want the computer to run code multiple times by itself 

var i = 1; //Create variable equal to 1

while(i<2){   
    console.log(i);
    i++;
}

//Add while loop to FizzBuzz code

var output = [];
var count = 1;

function fizzbuzz(){

    //While loop allows code to run automatically 
    //Check condition of count being less than or equal to 100
    //Will loop through code until count hits 100 which it will then stop looping through and move on
    while(count <= 100){                            

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
}

//Be careful you do not accidentally create an infinite loop. Will crash code.

//99 Bottles Challenge:

//Create our variable starting at 99 as we are decreasing the value every loop
var numOfBottles = 99; 

//Create function
function beer(){

    //set our variable greater than or equal to 0 
    while (numOfBottles >= 0){
        //We want our grammar to be correct. So we will set an if statement to change from the plural word "bottles" to "bottle" when 
        //there is only one bottle on the wall.
        var bottleWord = " bottles";
        if(numOfBottles === 1){
            bottleWord = " bottle";
        }

        console.log(numOfBottles + bottleWord + " of beer on the wall, " + numOfBottles + bottleWord + " of beer.");
        console.log(" Take one down, pass it around, " + numOfBottles + bottleWord + " of beer on the wall");
        numOfBottles--;
    }

}