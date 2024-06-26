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

function gcd() {
  greetings();

  const UserName = name();

  console.log(`Hello, ${UserName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const gcdLogic = () => {
    const firstNum = Math.floor(getRandomNumber(1, 100));
    const secondNum = Math.floor(getRandomNumber(1, 100));
    question(`${`${firstNum} ${secondNum}`}`);
    function gcdCheck(num1, num2) {
      if (num2 === 0) {
        return num1;
      }
      return gcdCheck(num2, num1 % num2);
    }
    const correctAnswer = gcdCheck(firstNum, secondNum);
    const yourAnswer = yourAnswerFunc();
    if (correctAnswer === +yourAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(
      `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${UserName}!`);
    return false;
  };

  times(gcdLogic, UserName);
}

gcd();
