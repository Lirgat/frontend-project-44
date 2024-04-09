import readlineSync from "readline-sync";

function greetings() {
  return 'Welcome to the Brain Games!'
}

function name(question = "What is your name? ") {
  const UserName = readlineSync.question(question);
  return UserName;
}

export { name, greetings };
