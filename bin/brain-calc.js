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

function calc() {
  greetings();

  const UserName = name();

  console.log(`Hello, ${UserName}!`);
  console.log('What is the result of the expression?');

  function randomOperator() {
    const random = Math.floor(Math.random() * 3);
    let operator;
    if (random === 0) {
      operator = '+';
    } else if (random === 1) {
      operator = '-';
    } else {
      operator = '*';
    }
    return operator;
  }
  function getSum() {
    const randomNumFirst = Math.floor(getRandomNumber(1, 25));
    const randomNumSecond = Math.floor(getRandomNumber(1, 25));
    const randomOperation = randomOperator();
    const operation = `${randomNumFirst} ${randomOperation} ${randomNumSecond}`;
    let operationResult;

    if (randomOperation === '+') {
      operationResult = randomNumFirst + randomNumSecond;
    } else if (randomOperation === '-') {
      operationResult = randomNumFirst - randomNumSecond;
    } else {
      operationResult = randomNumFirst * randomNumSecond;
    }

    question(operation);
    const yourAnswer = yourAnswerFunc();
    if (operationResult === +yourAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(
      `'${yourAnswer}' is wrong answer ;(. Correct answer was '${operationResult}'.`,
    );
    console.log(`Let's try again, ${UserName}!`);
    return false;
  }

  times(getSum, UserName);
}

calc();
