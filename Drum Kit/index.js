document.querySelector("button").addEventListener("click", handleClick); 
//Whenever the button is clicked, an event occurs due to .addEventListener
//Listens for clicks on the button.
//When a click occurs, it calls the function 'handleClick' which will activate the code inside it
//Do not add () to handleClick inside the addEventListener command as it will perform the function as soon as you load the page

function handleClick(){
    alert("click")
}