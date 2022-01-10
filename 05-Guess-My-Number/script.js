'use strict';

let secrateNumber = Math.trunc(Math.random() * 20)+1;

let score = 20;

let highscore=0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  /*======================== when player enters no number ================ */
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } 
   /*======================== when player wins ================ */
  else if (guess === secrateNumber) {
 
    document.querySelector('.message').textContent = '🎇you win the game🤗🤗🤗';

    document.querySelector('body').style.backgroundColor='#60b347';

    document.querySelector('.number').style.width='30rem'; 

    document.querySelector('.number').textContent = secrateNumber;
    if(score>highscore){
      highscore=score;
      document.querySelector('.highscore').textContent=highscore;
    }
  } 
  /*======================== when player enters no number is too low ================ */
  else if(guess!==secrateNumber){
    document.querySelector('.message').textContent =guess < secrateNumber? '📉too low☹️': '📈too high☹️';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent = '🎆You lost the game';
    }
    
  }
  // else if (guess < secrateNumber) {
  //   document.querySelector('.message').textContent = '📉too low☹️';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = '🎆You lost the game';
  //   }
  // }
  //   /*======================== when player enters no number is too high ===============*/
  
  //  else if (guess > secrateNumber) {
  //   document.querySelector('.message').textContent = '📈too high☹️';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   if (score < 1) {
  //     document.querySelector('.message').textContent = '🎆You lost the game';
  //   }
  // }
});


/* ==============challenge ==============*/

/*Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/

document.querySelector('.again').addEventListener('click',function(){
score=20;
secrateNumber== Math.trunc(Math.random() * 20)+1;

document.querySelector('.score').textContent=score;

  document.querySelector('.message').textContent='start guessing...';
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').value='';
 
})

