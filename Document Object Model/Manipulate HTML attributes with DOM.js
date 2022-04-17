//Manipulate HTML attributes with DOM
document.querySelector("a").attributes;
//Will give a list of all the attributes for an HTML element

document.querySelector("a").getAttribute("href");
//Allows us to retrieve current value of this attribute

//Can change value with setAttribute:
document.querySelector("a").setAttribute("href", "https://www.bing.com");
