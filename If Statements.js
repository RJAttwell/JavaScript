//Love Calculator with If statement
var yourName = prompt("What is your name?");
var crushName = prompt("What is your crushes name?");
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
if (n > 70){
    alert("Your love score is " + n + " %" + "SHEEEESH! That's love, baby")
} else{
alert(yourName + ", your compatability with " + crushName + " is " + n + "%! Yeah, I guess you kinda like each other....");
}

// - Combining Comparators:
//     - && = AND 
//     - ! = NOT 
//     - || = OR

//Love calculator with combined comparators:
var yourName = prompt("What is your name?");
var crushName = prompt("What is your crushes name?");
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;

if (n > 70){
    alert("Your love score is " + n + " %" + "SHEEEESH! That's love, baby")
} 

if (n > 30 && n <= 70){
alert(yourName + ", your compatability with " + crushName + " is " + n + "%! Yeah, I guess you kinda like each other....");
}

if (n < 30){
    alert("Your love score is " + n + "%. Damn, that's rough, buddy.")
}