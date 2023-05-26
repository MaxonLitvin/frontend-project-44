import { RandomNubmers } from "./even-random-numbers.js";
import runGameLogic, { roundNumbers } from "./gamelogic.js";


const description = 'What is the result of the expression?';

const GetRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomOperatorIndex = RandomNubmers(0, operators.length - 1);
    return operators[randomOperatorIndex];
};

const calculate = (operator, number1, number2) => {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        default:
            return Error('Incorrect operator');
    }
};

const generationRound = () => {
    const firstOperator = RandomNubmers(1, 100);
    const secondOperator = RandomNubmers(1, 100);
    const operator = GetRandomOperator();
    const question = `${firstOperator} ${operator} ${secondOperator}`;
    const correctAnswer = String(calculate(operator, firstOperator, secondOperator));
    return[question, correctAnswer];
};

const runCalcGame = () => {
    const round = [];
    for (let i = 0; i < roundNumbers; i += 1) {
        round[i] = generationRound();
    }
    return runGameLogic(round, description);
};

export default runCalcGame;