import readlineSync from 'readline-sync';

function greetings() {
  return console.log('Welcome to the Brain Games!');
}

function name(question = 'May I have your name? ') {
  const UserName = readlineSync.question(question);
  return UserName;
}

export { name, greetings };
