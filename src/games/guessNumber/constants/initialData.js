export const GAMEOVERCOUNT = 5;

const answer = Math.floor(Math.random() * 100) + 1;

const initialData = {
    input: '',
    answer,
    guessCount: 0,
    guessInformation: '',
    previousGuess: '',
    resetButton: false,
};

export { initialData };