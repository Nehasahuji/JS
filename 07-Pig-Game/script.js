'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score00El = document.querySelector('#score--0');
const score01El = document.getElementById('score--1');

const currentScor0El = document.getElementById('current--0');
const currentScor1El = document.getElementById('current--1');

score00El.textContent=0;
score01El.textContent=0;

const diceEL = document.querySelector('.dice');
diceEL.classList.add('hidden');
const newButton = document.querySelector('.btn--new');

const rollButton = document.querySelector('.btn--roll');

const holdButton = document.querySelector('.btn--hold');

let currentScore=0;
let activePlayer=0;
let scores = [0,0];

function switchPlayer(){
    currentScore=0;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    activePlayer = activePlayer===0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

 
rollButton.addEventListener('click',function(){
    // 1. genrate a random number
   let dice = Math.trunc(Math.random()*6+1);
   console.log(dice);

//    display a dice
    diceEL.classList.remove('hidden');
    diceEL.src=`dice-${dice}.png`;

// check for the rolled 1 and switch to next player
  if(dice===1){
    switchPlayer();
    
    
  }else{
    currentScore+=dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    
  }

})


holdButton.addEventListener('click',function(){
    // add the current score of the player to score
    scores[activePlayer]+=currentScore;
      document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    // if score is greater than 100 then wins the player
        for(let i=0;i<scores.length;i++){
            if(scores[i]>100 ){
                console.log(`player ${i+1} win`);
            }
        }
    // switch the player
    switchPlayer();
})

