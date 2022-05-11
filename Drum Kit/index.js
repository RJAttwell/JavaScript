var numOfDrums = document.querySelectorAll(".drum").length; //Gives us the number at which the for loop should stop
//Select only buttons with.drum in

for(var i = 0; i<numOfDrums; i++){
//Loop through all the buttons with class of "drum" on it and adds the event listener to them
//i++ to add one onto i until it gets to the max number of buttons (in this case it's 7)

    document.querySelectorAll("button")[i].addEventListener("click", function() {
    //console.log(this); //Will log any button that is clicked on
        this.style.color = "white"; //Will log all HTML inside a button that has been clicked on
        //Use 'this' to get the identify of the button that triggered the event and change use .style to change
        //it's colour to white
    });
 };
//Whenever the button is clicked, an event occurs due to .addEventListener
//Listens for clicks on the button.
//When a click occurs, it calls the function 'handleClick' which will activate the code inside it
//Do not add () to handleClick inside the addEventListener command as it will perform the function as soon as you load the page
//Functions that can use other functions as inputs are called higher order functions
//This feature is also present in Java, Python, Ruby, etc.

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

//addEventListener has 2 inputs (.addEventListener(input1, input2))
//input 1 specifies what event shall occur and input 2 says what should happen once that event is detected