//Document Object Model

document; //Will show the entire document tree and code inside it

document.firstElementChild; //Will give everything inside the first element. If it was html code, it would usually be the html tag

document.firstElementChild.firstElementChild; //Can go even further into the first element child of the first element child

document.firstElementChild.lastElementChild.firstElementChild; //Can go as far as you want to select the object you want

//Using Javascript to select an element using the DOM and then manipulate it by changing the inner HTML
var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Hello";

heading.style.color = "red"; //Can change colour 

document.querySelector; //Looks inside entire document for the object we want
//Only returns one specific item
//Can look for an element, class or ID

//Can combine our selectors:
//Ex: Looking for a link within a list item:
document.querySelector("li a")
//Getting back anchor tag within list item

//What if there are multiple elements that satisfy the selector query?
document.querySelector("#list .item");
//You actually only get back the first item in the document that satisfies that selector.
//If you want all items that satisfy the selector: 
document.querySelectorAll("#list .item");
//Returns an array. To get a specific item from that array, use:
document.querySelectorAll("#list .item")[x];
//Query selector used more than getElement 

document.querySelector("input").click(); //Can even perform actions like clicking a checkbox or button

//Lets say we had a car object with properties and methods
//Properties:
car.color; //Gets the value of the colour property and will output it
car.numberOfDoors = 4; //Setting a property. Difference between getting or setting a property is simply giving it a value through = 

//Methods:
car.drive(); //Call a method 
//Method has to be associated with an object

//For a simple button:
//Properties:
innerHTML;
style;
firstElementChild;
//Methods:
click();
appendChild(); //Add another child on
setAttribute(); //Can change href for example

document.getElementsByTagName(); //Looks through the web page and searches for all elements with certain tag name 
//Will return an array with all items with that tag

//To change certain element from this array:
//Ex: Change colour of a certain item in a list
document.getElementsByTagName("li")[2].style.color;

//Can use .length to find out how many items that use a specific tag there are
document.getElementsByTagName("li").length;

//Can also search by a specific class name if there are multiple items within the same class
document.getElementsByClassName("classname");
//Follows same rules as TagName when it comes to changing it's style

//Will only be one item since ID can only be used once
document.getElementById; 
