'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
const score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);
});

document.querySelector('.again').addEventListener('click', function () {});
