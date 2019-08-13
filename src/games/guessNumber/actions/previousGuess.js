import {
    INITIAL_PREVIOUS_GUESS,
    ADD_PREVIOUS_GUESS,
    CLEAR_PREVIOUS_GUESS,
} from '../constants/action-types';

export const initialPreviousGuess = (num) => ({
    type: INITIAL_PREVIOUS_GUESS,
    payload: `Previous Guess: ${num}`,
})

export const addPreviousGuess = (num) => ({
    type: ADD_PREVIOUS_GUESS,
    payload: ` ${num}`,
})

export const clearPreviousGuess = () => ({
    type: CLEAR_PREVIOUS_GUESS,
    payload: '',
})