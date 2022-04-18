//Dice 1 Section:
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Gives us a number between 1 and 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

//We want to change the source attribute to our randomImageSource so put that in as the second parameter
document.querySelector(".img1").setAttribute("src", randomImageSource);

//Dice 2 Section:

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src", randomImageSource2);

//Change h1 text for each scenario:

//If player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
//If player 2 wins
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
//If it's a tie
else{
    document.querySelector("h1").innerHTML = "Draw!";
}