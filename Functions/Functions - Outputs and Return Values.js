//This covers functions that are able to give an output

//Creating the function
//Give the function a name e.g: getMilk
//Specify whether we have an input function is going to use inside ()
//Use return to determine whether or not we get an output from the function

function getMilk(money, costPerBottle){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    //Money input = startingMoney parameter
    console.log("buy" + calcBottles(money, costPerBottle) + "bottles of milk"); //Will go and find calcBottles function
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");

    //return money % 1.5; //Remainder of this division
    return calcChange(money, costPerBottle);
} 

//var change = getMilk(4); //Can log remainder inside variable
//console.log(change); 

function calcBottles(startingMoney, costPerBottle){
    var numOfBottles = Math.floor(startingMoney/costPerBottle);

    return numOfBottles; //Returns number of bottles you can buy
}

function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}


console.log("HELLO, here is your" + getMilk(4) + " change.");