import { RandomNubmers } from './even-random-numbers.js';
import runGameLogic, { roundNumbers } from './gamelogic.js';

const description = 'Answer "yes" if the numbers is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generationRound = () => {
  const question = RandomNubmers(1, 100);
  const Examination = isEven(question) ? 'yes' : 'no';
  return [question, Examination];
};

const RunEvenGame = () => {
  const round = [];
  for (let i = 0; i < roundNumbers; i += 1) {
    round[i] = generationRound();
  }
  return runGameLogic(round, description);
};

export default RunEvenGame;
