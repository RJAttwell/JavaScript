//Manipulating HTML elements with JavaScript

document.querySelector("h1").style.fontSize = "5rem";
//All property names will be in this style: fontSize instead of font-size 

//Full list of DOM HTML properties: https://www.w3schools.com/jsref/dom_obj_document.asp

//Values they are set to have to be represented as strings unlike CSS

document.querySelector("button").classList;
//This will give list of classes attached to this element
//Can add classes to list of classes on a certain element
//Example:
document.querySelector("button").classList.add("invisible");
//Can allow us to go into styles.css and create a seperate style for the new added class
//Can keep all our styles in CSS but add or remove classes on the fly with JavaScript

document.querySelector("button").classList.remove;

//Toggle class on or off:
document.querySelector("button").classList.toggle("invisible");

//InnterHtml gives all HTML code inside the element's tags whilst text content gives you just the string
document.querySelector("h1").textContent;

//InnerHTML allows you add HTML code on the fly:
document.querySelector("h1").innerHTML = "<em>Hello</em>"
//Added emphasis tags to HTML code inside Javascript

