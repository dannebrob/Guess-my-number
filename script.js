'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let currentScore = (document.querySelector('.score').value = score);
let winningColor = '#60b347';
let standardColor = '#222';
let currentHighscore = (document.querySelector('.highscore').value = score);

function displayMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

let btnCheck = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // If no number is added
    if (!guess) {
      displayMessage('Please enter a number');
      // document.querySelector('.message').textContent = 'Please enter a number';

      // If answer is correct
    } else if (guess == secretNumber) {
      displayMessage('Correct Number!');
      // document.querySelector('.message').textContent = 'Correct Number!';
      let highScore = (document.querySelector('.highscore').textContent =
        score);
      document.body.style.backgroundColor = winningColor;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      // If answer is wrong
    } else if (guess != secretNumber) {
      guess > secretNumber
        ? displayMessage('Wrong guess! Try lower...')
        : displayMessage('Wrong guess! Try higher..');
      score--;
      document.querySelector('.score').textContent = score;
    }
  });

let btnAgain = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = document.querySelector('.score').textContent = 20;
    secretNumber = Math.random().toFixed(1) * 20 + 1;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = standardColor;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
  });
