import readlineSync from "readline-sync";

function name() {
  const UserName = readlineSync.question("What is your name? ");
  return UserName;
}

export { name };
