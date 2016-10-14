var prompt = require("prompt");

function displayHangman(x){
     console.log(`
_________
|         |`);
    if (x >= 1){
        console.log("|         0  ");
    }
    if (x >= 4){
        console.log("|        /|\\");
    }
    else if (x >= 3) {
        console.log("|        /|");
    }
    else if (x >= 2){
        console.log("|        /")
    }
    if (x >= 6){
        console.log("|        / \\");
    }
    else if (x >= 5){
        console.log("|        /");
    }
    console.log(`|
|`)
}

function pickRandomPhrase(){
    var phraseNum = Math.floor(Math.random() * 6 + 1);
    if (phraseNum == 1){
        return "hiphopopotamus my rhymes are bottomless";
    }
    if (phraseNum == 2){
        return "the banana phone rings first thing in the morning";
    }
    if (phraseNum == 3){
        return "killing me softly and weakly";
    }
    if (phraseNum == 4){
        return "ubiquitously fantastic jargon";
    }
    if (phraseNum == 5){
        return "humpback whales in great form";
    }
    if (phraseNum == 6){
        return "no rest for the wicked on sundays"
    }
}

function displayWhatsThere(){
    var showThis = "";
    var noLetter = true;
    notGuessed = false;
    
    theSplitPhrase.forEach(function(x){
        noLetter = true;
        if (x == " "){
            showThis += "  ";
        }
        guessedLetters.forEach(function(y){
            if (x == y){
                showThis += " " + x;
                noLetter = false;
            }

        });
        if (noLetter && x != " "){
            showThis += " _";
            notGuessed = true;
        }
        
    });
    console.log(showThis);
}

var notGuessed = true;
var notDead = true;

var wrongOnes = 0;

function playGame(){
    
    
    displayHangman(wrongOnes);
    // console.log("wrong guesses: " + wrongOnes);
    prompt.get("Guess a letter", function(err, userInput){
        if (err){
            console.log("it went bad");
        }
        else{
            var guess = userInput["Guess a letter"];
            // console.log("You guessed: " +guess);
            
            var alreadyGuessed = false;
            var badGuess = true;
            
            theSplitPhrase.forEach(function(x){
                if (guess == x){
                    badGuess = false;
                }
            });
            guessedLetters.forEach(function(x){
                if (guess == x){
                    alreadyGuessed = true;
                    console.log("you already guessed that, pay more attention");
               }
            });
            
            if (badGuess){
                wrongOnes++;
                console.log("NOPE!");
            }
            if (!alreadyGuessed){
                guessedLetters.push(guess);
            }
                    
            // console.log(guessedLetters);
            displayWhatsThere();
            if (wrongOnes > 6){
                console.log("You have lost, he is dead");
                notDead = false;
            }
            if (notGuessed == false){
                console.log("wow you actually guessed it");
            }
            
            
             if (notDead && notGuessed){
               playGame();
            }
        }
    });
}

var guessedLetters = [];
var thePhrase = pickRandomPhrase();
var theSplitPhrase = thePhrase.split("");
displayWhatsThere();
playGame();
