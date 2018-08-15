var inquirer = require("inquirer");



var Space = function(letter) {
    this.character = letter;
    this.guessed = true;
    this.render = function() {
        if (this.guessed === true) {
            console.log(letter);
        } else {
            console.log("_")
        }
    }; 
    this.check = function() {
        inquirer.prompt ([
            {
                name: "guess",
                message: "Guess a letter..."
            }
        ]).then(function(answers) {
            if (answers.guess === letter) {
                guessed = true;
                console.log(answers.guess);
                console.log("Correct!");
            } else {
                gussed = false;
                console.log("Guess again");
            }
        });
    };
}


// var test = new space("A");
// console.log(test);
// console.log(test.render());


module.exports = Space;
