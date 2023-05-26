import { RandomNubmers } from './even-random-numbers.js';
import runGameLogic, { roundNumbers } from './gamelogic.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generationRound = () => {
  const question = RandomNubmers(1, 100);
  const Examination = isPrime(question) ? 'yes' : 'no';
  return [question, Examination];
};

const RunPrimeGame = () => {
  const round = [];
  for (let i = 0; i < roundNumbers; i += 1) {
    round[i] = generationRound();
  }
  return runGameLogic(round, description);
};

export default RunPrimeGame;
