const letter = require("./letter.js");



var Word = function (wordToGuess) {
    this.new = [];
    this.stringIt = function() {
        var blankArray = [];
        var stringToArray = Array.from(wordToGuess);
        console.log(stringToArray);
        for (let i = 0; i < stringToArray.length; i++) {
            var test = new Space(stringToArray[i]);
            blankArray.push(test.render());
        }
        console.log(blankArray);
    };
};


var abc = new Word ("Noah")

console.log(abc.stringIt());