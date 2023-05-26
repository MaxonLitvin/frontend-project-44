import { RandomNubmers } from './even-random-numbers.js';
import runGameLogic, { roundNumbers } from './gamelogic.js';

const description = 'Find the greatest common divisor of given numbers.';

const GetGcd = (number1, number2) => {
  if (number1 === 0) {
    return number2;
  }
  return GetGcd(number2 % number1, number1);
};

const generationRound = () => {
  const firstNumber = RandomNubmers(1, 100);
  const secondNumber = RandomNubmers(1, 100);
  const correctAnswer = String(GetGcd(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};

const runGcdGame = () => {
  const round = [];
  for (let i = 0; i < roundNumbers; i += 1) {
    round[i] = generationRound();
  }
  return runGameLogic(round, description);
};

export default runGcdGame;
