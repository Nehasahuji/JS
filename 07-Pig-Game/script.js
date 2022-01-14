'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score00El = document.querySelector('#score--0');
const score01El = document.getElementById('score--1');

const currentScor0El = document.getElementById('current--0');
const currentScor1El = document.getElementById('current--1');

let currentScore,activePlayer,scores,playing;
const diceEL = document.querySelector('.dice');

const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');


const init = function(){
 currentScore = 0;
 activePlayer = 0;
 scores = [0, 0];
 playing = true;
  
 
  score00El.textContent = 0;
  score01El.textContent = 0;
  currentScor0El.textContent=0;
  currentScor1El.textContent=0;

  diceEL.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');


}

init();

diceEL.classList.add('hidden');


function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

rollButton.addEventListener('click', function () {
  if (playing) {
    // 1. genrate a random number
    let dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    //    display a dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    // check for the rolled 1 and switch to next player
    if (dice === 1) {
      switchPlayer();
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

holdButton.addEventListener('click', function () {
  // add the current score of the player to score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if score is greater than 100 then wins the player

    if (scores[activePlayer] >= 20) {
      diceEL.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      // switch the player
      switchPlayer();
    }
  }
});

// newButton.addEventListener('click',function(){
//   for(let i=0;i<scores.length;i++){
//     scores[i]=0;
//     console.log(`${i} and ${scores[i]}`)
//     document.getElementById(`current--${i}`).textContent =0;
//     document.getElementById(`score--${i}`).textContent=0;
//   }

//   diceEL.classList.add('hidden');
//   player0El.classList.add(`player--active`);
//   player1El.classList.remove(`player--active`);

//   if(!playing){
//     playing=true;
//     document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   }

newButton.addEventListener('click',init);


