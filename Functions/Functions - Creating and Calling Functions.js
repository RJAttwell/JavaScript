//Create Function
function getMilk(){
    //console.log logs the strings contained inside brackets inside the console
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("buyMilk");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");
} 
//Do not have to have semi colon after closing curly bracket on function

//Tell computer to find function with name "getMilk" and run it
getMilk();

//Stanford Karel Challenge Part 1
//https://stanford.edu/~cpiech/karel/ide.html

function main(){
    moveForward();
    turnLeft();
    moveForward();
 }
 
 function moveForward(){
    move();
    move();
    move();
    move();
 }

 //Stanford Karel Challenge Part 2
 function main(){
    firstStep();
    firstStep();
    firstStep();
    firstStep();
    putBeeper();
     
  }
  
  function firstStep(){
     putBeeper();
     move();
     turnLeft();
     move();
     turnRight();
  }

//Stanford Karel Challenge Part 3
//Chessboard Pattern
function main(){
    firstRow();
    secondRow();
    firstRow();
    secondRow();
    firstRow();
 }
 
 function firstRow(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
 }
 
 function secondRow(){
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
 }
 
