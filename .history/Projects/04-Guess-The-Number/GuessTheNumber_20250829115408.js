const randomNumber = parseInt(Math.random() * 100 + 1);


const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuess = document.querySelector('.guesses');
const lastResultShow = document.querySelector('.lastResult');
const tellLowOrHigh = document.querySelector('.lowOrHigh');
const reset = document.querySelector('.resultParas');
const p = document.createElement('p');
const prevAttempts = [];
