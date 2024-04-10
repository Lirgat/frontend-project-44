import readlineSync from "readline-sync";

function greetings() {
  return console.log("Welcome to the Brain Games!");
}

function name(question = "What is your name? ") {
  const UserName = readlineSync.question(question);
  return UserName;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function question(param) {
  return console.log(`Question: ${param}`);
}

function yourAnswerFunc() {
  return readlineSync.question(`Your Answer: `);
}

function times(func, name) {
  let count;
  for (count = 0; count < 3; count++) {
    if (func() === false) {
      return;
    }
  }
  if (count === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
}

export { name, greetings, getRandomNumber, question, yourAnswerFunc, times };
