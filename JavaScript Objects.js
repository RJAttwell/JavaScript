//Javascript Objects

//When creating properties inside an object, we are just creating a variable associated with another variable
//Example:

var houseKeeper1 = {
    name: "Jen",
    nameOfPrevHotels: ["travel lodge", "marriott"],
    yearsExp: "3",
    age: "23"
};

//If there is a large number of objects with the same properties:
//Create a constructor function
//Name has to be capitalised (NewFunction instead of newFunction)

function BellBoy(name, age, workPermit, languages){
    this.name = name;
    this.age = age;
    this.workPermit = workPermit;
    this.languages = languages;
}

//Initialising an object with this constructor function

var bellBoy1 = new BellBoy("Tim", 19, true, ["English", "French"]);

//Much more efficient than having to create a new object every time like:
var bellBoy1 = {
    name: "Tim",
    age: 19,
    workPermit: true,
    languages: ["English", "French"]
}

//Only difference between a normal and constructor function is the keyword 'new' and the capitalisation of the function name

//Methods:
//Can add function as another parameter inside the object

var bellBoy1 = {
    name: "Tim",
    age: 19,
    workPermit: true,
    languages: ["English", "French"],
    moveSuitcase: function(){
        alert("May I take your suitcase?")
        pickUpSuitcase();
        move();
    }
}

//Call method by using

bellBoy1.moveSuitcase();
//Difference between method and property is the ()

//Same with a constructor function 
function BellBoy(name, age, workPermit, languages){
    this.name = name;
    this.age = age;
    this.workPermit = workPermit;
    this.languages = languages;
    this.moveSuitcase = function(){
        alert("May I take your suitcase?")
        pickUpSuitcase();
        move();
    }
}

//Another example
function HouseKeeper(name, yearsExp, nameOfPrevHotels, age){
    this.name = name;
    this.yearsExp = yearsExp;
    this.nameOfPrevHotels = nameOfPrevHotels;
    this.age = age;
	this.clean = function() {
		alert("Cleaning in progress...")
	}
}

//To call: 
houseKeeper1.clean();

//Can see it is similar to code used in drum kit code:
var crash = new Audio("sounds/crash.mp3");
    crash.play(); 

//Cannot see the source code but probably looks like:
function Audio(fileLocation){
    this.fileLocation = fileLocation;
    this.play = function(){
        //Tap into audio hardware
        //Check file at fileLocation exists
        //Check file at fileLocation is a sound file
        //Play file at fileLocation
    }
}