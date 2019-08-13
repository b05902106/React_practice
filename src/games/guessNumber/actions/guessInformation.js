import {
    GUESS_TOO_HIGH,
    GUESS_TOO_LOW,
    GUESS_BINGO,
    GUESS_WRONG,
    CLEAR_INFORMATION,
} from '../constants/action-types';

export const guessTooHigh = () => ({
    type: GUESS_TOO_HIGH,
    payload: 'Last guess was too high.',
});

export const guessTooLow = () => ({
    type: GUESS_TOO_LOW,
    payload: 'Last guess was too low.',
});

export const guessBingo = () => ({
    type: GUESS_BINGO,
    payload: 'Bingo!!',
});

export const guessWrong = (answer) => ({
    type: GUESS_WRONG,
    payload: ` Game over. The answer is ${answer}`,
});

export const clearInformation = () => ({
    type: CLEAR_INFORMATION,
    payload: '',
});
