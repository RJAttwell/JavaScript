//Create a variable that stores the name that the user enters via prompt
var name = prompt("What is your name?");

//Captailise the first letter of their name

//Isolate the first character
var firstChar = name.slice(0,1);

//Turn the first character to upper case

upperCaseFirstChar = firstChar.toUpperCase();


//Isolate the rest of the name 

var restOfName = name.slice(1,name.length) //Will allow us to get rest of the name no matter the length of name

//Make sure rest of the name is lower case

restOfName = restOfName.toLowerCase();

//Add two chars together 

var captalisedName = upperCaseFirstChar + restOfName;


//Alert using full capaitalised name 

alert("Hello " + captalisedName);
