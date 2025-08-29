const randomNumber = parseInt(Math.random() * 100 + 1);
const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuess = document.querySelector('.guesses');
const lastResultShow = document.querySelector('.lastResult');
const tellLowOrHigh = document.querySelector('.lowOrHigh');
const reset = document.querySelector('.resultParas');
const p = document.createElement('p');


const prevAttempts = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const guessInput = parseInt(userInput.value);
        GuessValidation(guessInput);
    });
}

// validate Guess 
function GuessValidation(guessInput) {
    if (isNaN(guessInput)) {
        alert("Please enter a valid number");
    } else if (guessInput < 1) {
        alert("Please enter a number more than 1");
    } else if (guessInput > 100) {
        alert("Please enter a number between 1 and 100")
    } else {
        prevAttempts.push(guessInput);
        if (numGuess === 11) {
            displayGuess(guessInput);
            displayMessage(`Game Over : Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guessInput);
            checkGuess(guessInput);
        }        
    }
    
}



function checkGuess(guessInput) {    
    if(guessInput === randomNumber) {
        displayMessage(`You got it right!`);
        endGame();
    } else if (guessInput < randomNumber) {
        displayMessage(`Your guess is too low`);
    } else if (guessInput > randomNumber) {
        displayMessage(`Your guess is too high`);
    }
}

function displayGuess(guessInput) {
    userInput.value = '';
    userGuess.innerHTML += `${guessInput} `;
    numGuess++;
    lastResultShow.innerHTML = `${11 - numGuess}`;
.innerHTML = `${11 - numGuess}`;

}
function displayMessage(message) {
    tellLowOrHigh.innerHTML = `<h3>${message}</h3>`;

}


function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    reset.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevAttempts.length = 0; // clear array
        numGuess = 1;
        userGuess.innerHTML = '';
        lastResultShow.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        reset.removeChild(p);
        playGame = true;
    });
}
