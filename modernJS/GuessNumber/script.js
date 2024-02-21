'use strict';
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const input = document.querySelector('.number-input');
const guessMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.body;
let rNumber = randomNum();

function randomNum() {
  return Math.floor(Math.random() * (20 - 0 + 1) + 0);
}

function checkAnsver() {
  if (Number(score.textContent) === 1) {
    guessMessage.textContent = 'Ты проиграл';
    score.textContent = 0;
    btnCheck.disabled = 'true';
    body.style.backgroundColor = 'red';
    return;
  }
  if (Number(input.value) === rNumber) {
    guessMessage.textContent = 'Победа';
    question.textContent = rNumber;
    checkBestScore();
    btnCheck.disabled = 'true';
    body.style.backgroundColor = 'green';
  } else if (input.value < rNumber) {
    guessMessage.textContent = 'Больше';
    score.textContent = Number(score.textContent) - 1;
  } else if (input.value > rNumber) {
    guessMessage.textContent = 'Меньше';
    score.textContent = Number(score.textContent) - 1;
  }
}

function checkBestScore() {
  if (Number(highscore.textContent) < Number(score.textContent)) {
    highscore.textContent = score.textContent;
  }
}

function getAgain() {
  rNumber = randomNum();
  question.textContent = '???';
  score.textContent = 20;
  btnCheck.disabled = false;
  guessMessage.textContent = 'Начни угадывать';
  input.value = '';
  body.style.backgroundColor = 'black';
}

btnCheck.addEventListener('click', checkAnsver);
btnAgain.addEventListener('click', getAgain);
