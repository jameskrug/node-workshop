var prompt = require("prompt");

var theNum = Math.floor(Math.random()*10+1);
console.log(theNum);

prompt.get("Guess a number between 1 and 10", function(err, userInput){
    if (err){
        console.log("problems!");
    }
    else{
        console.log(userInput);
        var theOtherNum = parseInt(userInput["Guess a number between 1 and 10"]);
        if (theNum == theOtherNum){
            console.log("good guess! The number was: " + theNum);
        }
        else{
            console.log("wrong answer, the number was: " + theOtherNum);
        }
    }
})