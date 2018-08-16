var inquirer = require("inquirer");



var Space = function(letter) {
    this.character = letter;
    this.guessed = false;
    this.render = function() {
        if (this.guessed === true) {
            return letter;
        } else {
            return "_";
        }
    }; 
    this.check = function(character) {
            if (character === letter) {
                guessed = true;
                console.log(character);
                console.log("Correct!");
            } else {
                guessed = false;
                console.log("Guess again");
            }
    };





    // this.check = function() {
    //     inquirer.prompt ([
    //         {
    //             name: "guess",
    //             message: "Guess a letter..."
    //         }
    //     ]).then(function(answers) {
    //         if (answers.guess === letter) {
    //             guessed = true;
    //             console.log(answers.guess);
    //             console.log("Correct!");
    //         } else {
    //             guessed = false;
    //             console.log("Guess again");
    //         }
    //     });
    // };
}


var test = new Space("A");
// console.log(test);
console.log(test.check("A"));


module.exports = Space;
