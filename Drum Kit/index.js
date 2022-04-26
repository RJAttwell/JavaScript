var numOfDrums = document.querySelectorAll(".drum").length; //Gives us the number at which the for loop should stop
//Select only buttons with.drum in

for(var i = 0; i<numOfDrums; i++){
//Loop through all the buttons with class of "drum" on it and adds the event listener to them
//i++ to add one onto i until it gets to the max number of buttons (in this case it's 7)

document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}
//Whenever the button is clicked, an event occurs due to .addEventListener
//Listens for clicks on the button.
//When a click occurs, it calls the function 'handleClick' which will activate the code inside it
//Do not add () to handleClick inside the addEventListener command as it will perform the function as soon as you load the page
//Functions that can use other functions as inputs are called higher order functions
//This feature is also present in Java, Python, Ruby, etc.

function handleClick(){
    alert("click")
}

//Different method:
//Instead of adding a function name which calls the function later on, you can write it as an anonymous function
// document.querySelector("button").addEventListener("click", function(){
//     alert("click");
// });

//addEventListener has 2 inputs (.addEventListener(input1, input2))
//input 1 specifies what event shall occur and input 2 says what should happen once that event is detected