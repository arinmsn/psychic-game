
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables tracking wins, losses, and guesses left (starts at 10)
var wins = 0;
var losses = 0;
var guesses = 10;

var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var GuessText = document.getElementById("guesses-text");


document.onkeyup = function(event) {
    
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerGuess);

    // What key is pressed?
    var userGuess = event.key;
    console.log(userGuess);
    var lowerCaseUserText = userGuess.toLowerCase();

// Don't catch #s, punctuation, <Enter> button, just letters.
// Key code 65 = letter 'a' ... Key code 90 = letter 'z'
if (! (event.which <=90 && event.which >=65)) return

if(lowerCaseUserText === computerGuess){
    wins++;
}else{
    guesses--;
    if (guesses <= 0)
        gameEnd();
}

if(guesses === 0 || lowerCaseUserText !== computerGuess){
    losses++;
}


function gameEnd() {
    Swal(' Game over!');
    document.onkeyup = function(){
    document.location.reload();
    }
}

// Display the user and computer guesses, and wins/losses/guesses left


winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
GuessText.textContent = "Guesses left: " + guesses;
userChoiceText.textContent = "You chose: " + lowerCaseUserText;
computerChoiceText.textContent = "I, the computer, picked: " + computerGuess;

};