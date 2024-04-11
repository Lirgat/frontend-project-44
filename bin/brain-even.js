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

function even() {
  greetings();
  const UserName = name();
  console.log(`Hello, ${UserName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const evenQuestion = () => {
    const randomNum = Math.floor(getRandomNumber(1, 100));
    question(randomNum);
    const yourAnswer = yourAnswerFunc();
    if (
      (randomNum % 2 === 0 && yourAnswer === 'yes')
      || (randomNum % 2 !== 0 && yourAnswer === 'no')
    ) {
      console.log('Correct!');
      return true;
    }
    console.log(`Let's try again, ${UserName}!`);
    return false;
  };

  times(evenQuestion, UserName);
}

even();
