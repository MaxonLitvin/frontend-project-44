import { RandomNubmers } from './even-random-numbers.js';
import runGameLogic, { roundNumbers } from './index.js';

const description = 'What number is missing in the progression?';
const progressionLenght = 10;

const generateArrays = () => {
  const step = RandomNubmers(1, 100);
  const resultProgressoin = [];
  const startNum = RandomNubmers(1, 10);
  for (let i = 0; i <= progressionLenght; i += 1) {
    resultProgressoin.push(startNum + i * step);
  }
  return resultProgressoin;
};

const generationRound = () => {
  const resultProgressoin = generateArrays();
  const hiddenIndex = RandomNubmers(0, progressionLenght - 1);
  const correctAnswer = String(resultProgressoin[hiddenIndex]);
  resultProgressoin[hiddenIndex] = '..';
  const question = resultProgressoin.join(' ');
  return [question, correctAnswer];
};

const RunProgressionGame = () => {
  const round = [];
  for (let i = 0; i < roundNumbers; i += 1) {
    round[i] = generationRound();
  }
  return runGameLogic(round, description);
};

export default RunProgressionGame;
