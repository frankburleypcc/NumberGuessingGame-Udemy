// Game Function

// Play must guess a number between min and max
// Player get a certain amount of guesses
// Notify player of guesses remaining
// Notify of the player of the correct answer if they lose
// Let the player choose to play again

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn= document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI Min and Max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    // Validate Input
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');

    }
    // Check if won
    if(guess === winningNum) {
        // Game over - WON

        gameOver(true, `${winningNum} is correct. YOU WIN!!`);
    } else {
        // Wrong number 
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - LOST
            
            gameOver(false, `Game Over. You Lost. The correct number was ${winningNum}`);

        } else {
            // Game Continues - Answer Wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear the input
            guessInput.value = '';


            // Tell user it is the wrong number. 
            setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`);


        }
    }
});

// Game over
function gameOver(won, msg) {
     let color;
     won === true ? color = 'green' : 'red';

     // Disable Input
     guessInput.disabled = true;
     // Change border input to show winning answer
     guessInput.style.borderColor = color;
     // Set text color
     message.style.color = color;
     // Let user know that they won
     setMessage(msg);
}

// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


