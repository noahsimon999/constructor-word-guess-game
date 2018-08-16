const prompt = require("prompt");
const inquirer = require("inquirer");
const letter = require("./letter.js");
const word = require("./word.js");

var wordChoices = ["Japan", "India", "Bangladesh", "Mexico", "Brazil", "Nigeria", "Indonesia", "USA", "Pakistan", "Argentina", "Egypt", "Philippines", "Turkey", "China", "Russia", "France"];

function chooseWord() {
    var randomNumber = Math.floor(Math.random()*15);
    var actualWord = wordChoices[randomNumber];
    return actualWord;
}

// chooseWord();

console.log("   =================================================================================== " +
           "\n#                                                                                       #" +
           "\n#                      **    *    *****    *****       ******                           #" +
           "\n#                      * *   *   *     *   *     *     *                                #" +
           "\n#                      *  *  *  *       *  *      *    ****                             #" +
           "\n#                      *   * *   *     *   *     *     *                                #" +
           "\n#                      *    **    *****    *****       ******                           #" +
           "\n#                                                                                       #" +
           "\n#    *     *      **      **    *     ****        *       *          **      **    *    #" +
           "\n#    *     *     *  *     * *   *   *            * *     * *        *  *     * *   *    #" +
           "\n#    *******    ******    *  *  *   *  ****     *   *   *   *      ******    *  *  *    #" +
           "\n#    *     *   *      *   *   * *   *     *    *     * *     *    *      *   *   * *    #" +
           "\n#    *     *  *        *  *    **    *****    *       *       *  *        *  *    **    #" +
           "\n#                                                                                       #" +
           "\n  ====================================================================================");





var displayWord = new word(chooseWord());
console.log (displayWord.stringIt());


inquirer.prompt ([
    {
        name: "guess",
        message: "Guess a letter..."
    }
]).then(function(answer) {
    displayWord.wordGuess(answer.guess);
    console.log(answer);
    console.log (displayWord.stringIt());
});