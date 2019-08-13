import {
    CLEAR_INPUT, CHANGE_INPUT
} from '../constants/action-types';

export const clearInput = () => ({
    type: CLEAR_INPUT,
    payload: '',
})

export const changeInput = (input) => ({
    type: CHANGE_INPUT,
    payload: input,
})