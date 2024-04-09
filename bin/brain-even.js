import readlineSync from "readline-sync";
import { name } from '../src/cli.js'
import { greetings } from '../src/cli.js';

console.log(greetings());

const UserName = name();

console.log(`Hello, ${UserName}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
  }

let evenQuestion = () => {
    let randomNum = Math.floor(getRandomNumber(1, 100))
    console.log(`Question: ${randomNum}`);
    let yourAnswer = readlineSync.question(`Your Answer: `)
    if(randomNum % 2 === 0 && yourAnswer === "yes"){
        console.log('Correct!')
        return true
    } else if(randomNum % 2 !== 0 && yourAnswer === 'no'){
        console.log('Correct!')
        return true
    } else {
        console.log(`Let's try again, ${UserName}`)
        return false
    }    
}

function isEven(func) {
    let count
    for(count = 0; count < 3; count++){
        if(func() === false){
            return
        }   
    }
    if(count === 3){
        return console.log(`Congratulations, ${UserName}!`)
    }
}

isEven(evenQuestion)
