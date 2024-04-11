import {
  name, // Без передачи аргуемнтов
  greetings, // Без передачи аргументов
} from "../src/cli.js";
import {
  getRandomNumber, //Первым аргументов выступает - мин. число, вторым - макс.
  question, //В аргумент передаётся переменная или шабл. строка с заданием
  yourAnswerFunc, // Без передачи аргументов
  times, //В первом аргументе указываем имя функции без круглых скобок, второй - UserName
} from "../src/index.js";

function prime() {
  greetings();

  const UserName = name();

  console.log(`Hello, ${UserName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  function isPrime() {
    const GET_PRIME = Math.floor(getRandomNumber(1, 100));
    let correctAnswer;

    if (GET_PRIME <= 1) {
      correctAnswer = "no";
    }

    for (let i = 2; i <= Math.sqrt(GET_PRIME); i++) {
      if (GET_PRIME % i === 0) {
        correctAnswer = "no";
      } else {
        correctAnswer = "yes";
      }
    }

    question(GET_PRIME);

    let userAnswer = yourAnswerFunc();

    if (correctAnswer === userAnswer) {
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

  times(isPrime, UserName);
}

prime();
