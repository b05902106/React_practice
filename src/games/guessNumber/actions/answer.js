import { SET_ANSWER } from '../constants/action-types';

export const setAnswer = () => ({
    type: SET_ANSWER,
    payload: Math.floor(Math.random() * 100) + 1,
});