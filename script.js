'use strict';
//selecting 2 elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//set the starting value o
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //Generation a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //Check the dice if it is 1 or otherwise
  if (dice != 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;

    // score0El.textContent = currentScore;
  } else {
    //switch the other player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});