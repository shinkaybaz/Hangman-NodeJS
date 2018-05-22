
var randomCharacter = require('./game.js');
var wordCons = require('./Word.js');
var letterCons = require('./Letter.js');
var inquirer = require('inquirer');
var letterGuessed = 0;

var maxGuesses = 3;

var findWord = new wordCons('');


function takeAGuess() {

    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:',
        validate: function (str) {
            var regEx = new RegExp('^[a-zA-Z\s]{1,1}$');
            return regEx.test(str);
        }
    }]).then(function (letterInput) { 
        if (letterGuessed >= maxGuesses) {
            console.log('Game over. You have no more guesses left.');
            console.log("The random character was: " + randomCharacter);

            findWord = new wordCons('');
            maxGuesses = 3;
            letterGuessed = 0;
            takeAGuess();
        }

        var letter = letterInput.letter;
        findWord.findLetter(letter); 
        letterGuessed++;
        if (findWord.isComplete()) {
            console.log('Yes! It was ' + randomCharacter + '!');
            return; 
        }
        console.log('\nYou have ' + (maxGuesses - letterGuessed) + ' guesses left.')
        console.log('');
        takeAGuess(); 
    }
    );
}

takeAGuess(); 