'use strict';
const player0actEl = document.querySelector('.player--0');
const player1actEl = document.querySelector('.player--1');
const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const newbtn = document.querySelector('.btn--new');
const rollbtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');
const curentdis = document.querySelector('.current-score');

//Starting procedures
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');
let playing = true;

const score = [0, 0];
let currentScore = 0;
let activeplayer = 0;
function switchplayer() {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0actEl.classList.toggle('player--active');
  player1actEl.classList.toggle('player--active');
}

rollbtn.addEventListener('click', function () {
  if (playing) {
    diceEl.classList.remove('hidden');
    let dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchplayer();
    }
  }
});

holdbtn.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 50) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    }
    switchplayer();
  }
});

newbtn.addEventListener('click', function () {
  location.reload();
});
