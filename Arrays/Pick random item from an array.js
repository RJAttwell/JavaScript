//Pick random item from an array

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
        
    //Write your code here.

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    //var randomPerson = names[Math.floor(Math.random() * numberofPeople)]
    
    return randomPerson + " is buying lunch today";

/******Don't change the code below*******/    
}