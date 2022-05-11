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