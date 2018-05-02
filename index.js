var inquirer = require('inquirer');
var isLetter = require('./Letter');
var Word = require('./Word.js');
var Game = require('./Game.js');
var hangManDisplay = Game.newWord.hangman;

var hangman = {
    wordBank: Game.newWord.wordList,
    guessesRemaining: 10,
    guessedLetters: [],
    display: 0,
    currentWord: null,
    startGame: function() {
      var that = this;
      if(this.guessedLetters.length > 0){
        this.guessedLetters = [];
      }
    }
}