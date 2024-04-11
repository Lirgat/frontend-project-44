#!/usr/bin/env node
import {
  name, // Без передачи аргуемнтов
  greetings, // Без передачи аргументов
} from '../src/cli.js';
import {
  getRandomNumber, // Первым аргументов выступает - мин. число, вторым - макс.
  question, // В аргумент передаётся переменная или шабл. строка с заданием
  yourAnswerFunc, // Без передачи аргументов
  times, // В первом аргументе указываем имя функции без круглых скобок, второй - UserName
} from '../src/index.js';

function progression() {
  greetings();

  const UserName = name();

  console.log(`Hello, ${UserName}!`);
  console.log('What number is missing in the progression?');

  function arrProgression() {
    const arr = [];
    let randomStart = Math.floor(getRandomNumber(1, 10));

    const RANDOM_PLUS = Math.floor(getRandomNumber(1, 10));
    const RANDOM_INDEX = Math.floor(getRandomNumber(0, 9));

    for (let i = 0; i < 10; i += 1) {
      arr.push((randomStart += RANDOM_PLUS));
    }

    const dottingArr = '..';
    arr[RANDOM_INDEX] = dottingArr;

    const ARR_STRING = arr.join(' ');
    const GET_DOT_INDEX = arr.indexOf('..');

    let currentValue;

    if (GET_DOT_INDEX === 0) {
      currentValue = GET_DOT_INDEX + 1;
    } else {
      currentValue = GET_DOT_INDEX - 1;
    }

    let correctAnswer;

    if (currentValue > GET_DOT_INDEX) {
      correctAnswer = arr[currentValue] - RANDOM_PLUS;
    } else {
      correctAnswer = arr[currentValue] + RANDOM_PLUS;
    }

    question(ARR_STRING);
    const userAnswer = yourAnswerFunc();

    if (correctAnswer === +userAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${UserName}!`);
    return false;
  }

  times(arrProgression, UserName);
}

progression();
