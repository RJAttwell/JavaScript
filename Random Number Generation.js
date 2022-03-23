var n = Math.random();
//Math.random generates a floating poin, psuedo-random number from 0 up to but not including 1.
//Generate a dice roll.
n = n * 6;
n = Math.floor(n) + 1; 
//+ 1 as you would never get 6 without it 
//Cannot use Math.round as that would sometimes show a 0 (There is no 0 on dice)
console.log(n);

//Love Calculator Challenge
var yourName = prompt("What is your name?");
var crushName = prompt("What is your crushes name?");
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
console.log(n);
alert(yourName + ", your compatability with " + crushName + " is " + n + "%! Sheeesh!");