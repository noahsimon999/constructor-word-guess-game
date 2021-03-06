const letter = require("./letter.js");



var Word = function (wordToGuess) {
    this.new = [];
    this.stringIt = function() {
        // blank array for spaces or letters to be pushed to once render() is run
        var blankArray = [];
        //takes the wordToGuess string and converts it to an array
        var stringToArray = Array.from(wordToGuess);
        console.log(stringToArray);
        //loops through the new array and uses the letter.js constructor for each letter.
        //takes each letter and runs render() to output a _ or a letter
        for (let i = 0; i < stringToArray.length; i++) {
            var blankOrLetter = new letter(stringToArray[i]);
            blankArray.push(blankOrLetter.render());
        }
        // logs the blank array, but cannot log the console.logs from letter.js
        console.log(blankArray);
    };
    this.wordGuess = function(character) {
        var stringToArray = Array.from(wordToGuess);
        console.log(stringToArray);
        for (let i = 0; i < stringToArray.length; i++) {
            var blankOrLetter = new letter(stringToArray[i]);
            blankOrLetter.check(character);
            console.log(blankOrLetter.character);
        }
    }
};



// var abc = new Word ("Noah")

// console.log(abc.wordGuess("N"));

module.exports = Word;