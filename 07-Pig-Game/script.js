'use strict';

const score01El = document.querySelector('#score--0');
const score02El = document.getElementById('score--1');

score01El.textContent=0;
score02El.textContent=0;

const dice = document.querySelector('.dice');
dice.classList.add('hidden');