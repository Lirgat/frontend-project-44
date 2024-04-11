import {
  name, // Без передачи аргуемнтов
  greetings, // Без передачи аргументов
  getRandomNumber, //Первым аргументов выступает - мин. число, вторым - макс.
  question, //В аргумент передаётся переменная или шабл. строка с заданием
  yourAnswerFunc, // Без передачи аргументов
  times, //В первом аргументе указываем имя функции без круглых скобок, второй - UserName
} from "../src/cli.js";

function even() {
  greetings();

  const UserName = name();

  console.log(`Hello, ${UserName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const evenQuestion = () => {
    let randomNum = Math.floor(getRandomNumber(1, 100));
    question(randomNum);
    let yourAnswer = yourAnswerFunc();
    if (
      (randomNum % 2 === 0 && yourAnswer === "yes") ||
      (randomNum % 2 !== 0 && yourAnswer === "no")
    ) {
      console.log("Correct!");
      return true;
    } else {
      console.log(`Let's try again, ${UserName}`);
      return false;
    }
  };

  times(evenQuestion, UserName);
}

function calc() {
  greetings();

  const UserName = name();

  console.log(`Hello, ${UserName}!`);
  console.log("What is the result of the expression?");

  function randomOperator() {
    const random = Math.floor(Math.random() * 3);
    let operator;
    if (random === 0) {
      operator = "+";
    } else if (random === 1) {
      operator = "-";
    } else {
      operator = "*";
    }
    return operator;
  }

  function getSum() {
    let randomNumFirst = Math.floor(getRandomNumber(1, 25));
    let randomNumSecond = Math.floor(getRandomNumber(1, 25));
    let randomOperation = randomOperator();
    let operation =
      randomNumFirst + " " + randomOperation + " " + randomNumSecond;
    let operationResult;

    if (randomOperation === "+") {
      operationResult = randomNumFirst + randomNumSecond;
    } else if (randomOperation === "-") {
      operationResult = randomNumFirst - randomNumSecond;
    } else {
      operationResult = randomNumFirst * randomNumSecond;
    }

    question(operation);
    let yourAnswer = yourAnswerFunc();
    if (operationResult === +yourAnswer) {
      console.log("Correct!");
      return true;
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${operationResult}'.`
      );
      console.log(`Let's try again, ${UserName}`);
      return false;
    }
  }

  times(getSum, UserName);
}

function gcd() {
  greetings();

  const UserName = name();

  console.log(`Hello, ${UserName}!`);
  console.log("Find the greatest common divisor of given numbers.");

  const gcdLogic = () => {
    let firstNum = Math.floor(getRandomNumber(1, 100));
    let secondNum = Math.floor(getRandomNumber(1, 100));
    question(`${firstNum + " " + secondNum}`);
    function gcdCheck(num1, num2) {
      if (num2 === 0) {
        return num1;
      } else {
        return gcdCheck(num2, num1 % num2);
      }
    }
    let correctAnswer = gcdCheck(firstNum, secondNum);
    let yourAnswer = yourAnswerFunc();
    if (correctAnswer === +yourAnswer) {
      console.log("Correct!");
      return true;
    } else {
      console.log(
        `'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${UserName}`);
      return false;
    }
  };

  times(gcdLogic, UserName);
}

function progression() {
  greetings();

  const UserName = name();

  console.log(`Hello, ${UserName}!`);
  console.log('What number is missing in the progression?');

  function arrProgression() {
    let arr = [];
    let randomStart = Math.floor(getRandomNumber(1, 10));

    const RANDOM_PLUS = Math.floor(getRandomNumber(1, 10));
    const RANDOM_INDEX = Math.floor(getRandomNumber(0, 9));

    for (let i = 0; i < 10; i++) {
      arr.push((randomStart += RANDOM_PLUS));
    }

    const DOTTING_ARR = (arr[RANDOM_INDEX] = "..");
    const ARR_STRING = arr.join(" ");
    const GET_DOT_INDEX = arr.indexOf("..");

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
    let userAnswer = yourAnswerFunc();

    if (correctAnswer === +userAnswer) {
      console.log("Correct!");
      return true;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${UserName}`);
      return false;
    }
  }

  times(arrProgression, UserName);
}

export { even, calc, gcd, progression };
