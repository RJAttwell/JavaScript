function getMilk(money){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    //Math.floor rounds down the figure
    var numOfBottles = Math.floor(money / 1.5);
    console.log("buy" + numOfBottles + "bottles of milk");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");
} 

//Life in weeks challenge

//Solution 1
function lifeInWeeks(age){
    var numOfDays = (90 - age) * 365;

    var numOfWeeks = (90 - age) * 52;
    
    var numOfMonths = (90 - age) * 12;
    
    console.log("You have " + numOfDays + " days, " + numOfWeeks + " weeks, and " + numOfMonths + " months left.");
}

//Solution 2

function lifeInWeeks(age){
    var yearsRemaining = 90 - age;
    var daysRemaining = yearsRemaining * 365;
    var weeksRemaining = yearsRemaining * 52;
    var monthsRemaining = yearsRemaining * 12;
    
  console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left.");
}