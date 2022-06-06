//DETECTING BUTTON PRESS
//If button was pressed, the code inside the querySelectorAll checks which button was pressed and sends that to makeSound to play relevant sound

var numOfDrums = document.querySelectorAll(".drum").length; 
//Gives us the number at which the for loop should stop
//Select only buttons with.drum in

function handleClick(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play(); 
    //This code creates an HTML audio element
    //Has several different elements such as time, check whether it's paused, etc.
    //Has methods such as play which plays back the media
}

//Different method:
//Instead of adding a function name which calls the function later on, you can write it as an anonymous function
// document.querySelector("button").addEventListener("click", function(){
//     alert("click");
// });

for(var i = 0; i<numOfDrums; i++){
//Loop through all the buttons with class of "drum" on it and adds the event listener to them
//i++ to add one onto i until it gets to the max number of buttons (in this case it's 7)

    document.querySelectorAll("button")[i].addEventListener("click", function() {
    //console.log(this); //Will log any button that is clicked on
        //this.style.color = "white"; //Will log all HTML inside a button that has been clicked on
        //Use 'this' to get the identify of the button that triggered the event and change use .style to change
        //it's colour to white


        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });

}
//Whenever the button is clicked, an event occurs due to .addEventListener
//Listens for clicks on the button.
//When a click occurs, it calls the function 'handleClick' which will activate the code inside it
//Do not add () to handleClick inside the addEventListener command as it will perform the function as soon as you load the page

//HIGHER ORDER FUNCTIONS
//Functions that can use other functions as inputs are called higher order functions
//This feature is also present in Java, Python, Ruby, etc.

//The function that is inserted as an input is called a CALLBACK FUNCTION.
//Allows us to wait until something finishes happening and the function is then called back and executed






//DETECTING KEYBOARD PRESS
//If key is pressed, the key property of the event is sent 

document.addEventListener("keydown", function(event){
    //document.addEventListener allows entire page to listen for keyboard presses instead of a specific element (querySelector)
    
    //function(event) will show information for when the event occurs, including what key is pressed
    //Can also use 'evt' since name of input does not matter (similar to naming variable)

    makeSound(event.key);
    buttonAnimation(event.key);

});

//Plays relevant sound based on what key is tapped:

function makeSound(key){

    switch(key){  //Expression is the thing we're going to switch on. 
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
        break; //Tells the code to exit the switch statement and continue with the rest of the code

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play(); 
        break;

        case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play(); 
        break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play(); 
        break;

    //Covers all other scenarios that were not specified. Like an else in an if statement.
    default: console.log(buttonInnerHTML); 


    }
}

//addEventListener has 2 inputs (.addEventListener(input1, input2))
//input 1 specifies what event shall occur and input 2 says what should happen once that event is detected

//ADDING ANIMATIONS TO WEBSITE:
function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   //To complete the animation, we need to ensure that the buttons do not stay pressed. We can do this by adding a piece of timeout code that'll remove
   //the pressed class after 0.1 seconds.
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}