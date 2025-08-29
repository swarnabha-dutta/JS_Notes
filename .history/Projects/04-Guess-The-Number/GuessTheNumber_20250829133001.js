const { use } = require("react");

const randomNumber = parseInt(Math.random() * 100 + 1);
const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuess = document.querySelector('.guesses');
const lastResultShow = document.querySelector('.lastResult');
const tellLowOrHigh = document.querySelector('.lowOrHigh');
const reset = document.querySelector('.resultParas');
const p = document.createElement('p');


const prevAttempts = [];
const numGuess = 1;
let playGame = true;

if (playGame) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const guessInput= parseInt(userInput.value);
        GuessValidation(guessInput);

    })
}

// validate Guess 
function GuessValidation(userGuess) {
    if (isNaN(userGuess)) {
        alert("Please enter a valid number");
    } else if (userGuess < 1) {
        alert("Please enter a number more than 1");
    } else if (userGuess > 100) {
        alert("Please enter a number between 1 and 100")
    } else {
        prevAttempts.push(userGuess);
        displayGuess(``);
        
    }
    
}



function checkGuess(userGuess) {
    // 
}

function displayGuess(userGuess) {
    
}
function displayMessage(message) {
    
}



function endGame() {
    
}

function newGame() {

}
