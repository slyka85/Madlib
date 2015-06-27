// Before playing first 'npm install colors' to install colors module
// User starts playing a game by typing `node app.js play`.
// User chooses from the 3 themes provided by typing the numbers: 1, 2 or 3.
// The number then is converted to a string
// If user's ipnut is incorrect, the error is displayed.
var colors = require('colors');
var input = parseInt(process.argv[2]) || process.argv[2];
var words = {
  noun: process.argv[3],
  adjective: process.argv[4],
  noun2: process.argv[5],
  verb: process.argv[6],
  story: function() {
    var themes = [
      " 1: Peter's Life".green,
      " 2: Stubborn Alice".magenta,
      " 3: Advice from Maria".yellow
    ];
    var stories = [
      "Peter loves the " + words.noun + " in the " + words.adjective + " " + words.noun2 + " when it's " + words.verb + "ing.",
      "Alice will not " + words.verb + " the " + words.noun + " if " + words.noun2 + " is " + words.adjective + ".",
      "In order to " + words.verb + " the " + words.adjective + " " + words.noun + ", Maria suggested a " + words.noun2 + "."
    ];
    //Error given if user's input is incorrect
    if (process.argv.length !== 7 && input !== "play") {
      console.log(
        "Ooooops! \nThat's not how you play, my friend! I will repeat the instructions for you: Give me the number of the game you wish to play by typing 1, 2 or 3 and then provide 4 words in the following order: noun, adjective, noun, verb. Aaaaaand good luck!");
    }
    //The instructions of the game are given to the user after he/she types 'play'
    else if (input === "play") {
      console.log(
        "Welcome to MADLIB! \nPlease read my instructions: \nI've got 3 Game Themes for you today! Yay! \nHere they are: ");
      for (var i = 0; i < themes.length; i++) {
        console.log(themes[i]);
      }
      console.log("Think thoroughly and choose one! \nTo create '" + (themes[0].slice(9)).green + "' story  - type '1'. For '" + (themes[1].slice(9)).magenta + "' - type '2'. And for '" + (themes[2].slice(9)).yellow + "' - type '3'. \nFollowing the number for your desired theme, provide me with 4 parts of speech in the following order: 'noun', 'adjective', 'noun', 'verb', so we can build a story together. \nHAVE FUN!");
    } else if (input === 1) {
      console.log((themes[0].slice(9)).green + " story: \n" + stories[0]);
    } else if (input === 2) {
      console.log((themes[1].slice(9)).magenta + " story: \n" + stories[1]);
    } else if (input === 3) {
      console.log((themes[2].slice(9)).yellow + " story: \n" + stories[2]);
    }
  }
};
words.story();