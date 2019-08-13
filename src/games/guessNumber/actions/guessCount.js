import {
    ADD_GUESS_COUNT, CLEAR_GUESS_COUNT
} from '../constants/action-types';

export const addGuessCount = () => ({
    type: ADD_GUESS_COUNT,
    payload: 1,
});

export const clearGuessCount = () => ({
    type: CLEAR_GUESS_COUNT,
    payload: 0,
});