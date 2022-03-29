//Arrays

var guestList = ["Richard", "Zaquaris", "Jen", "Tom", "Anna"]; //Create array with string items inside
console.log(guestList); //Shows array along with number of data items inside
console.log(guestList.length); //Just prints number of data items inside array
console.log(guestList[0]) //Shows a certain piece of data inside the array at the position specified 
console.log(guestList.includes("name")) //Checks if this piece of data is actually inside the array. A boolean is returned after the check. True if it's present and false if not.

//Challenge 1:
var guestList = ["Richard", "Zaquaris", "Jen", "Tom", "Anna"];
var guestCheck = prompt("Enter guest name: ")

if(guestList.includes(guestCheck)){
    alert("Welcome my homie");
}else{
    alert("Get out of my HOUSE!!");
}

