import {
    RESET_BUTTON_CHANGE
} from '../constants/action-types';

export const resetButtonChange = (open) => ({
    type: RESET_BUTTON_CHANGE,
    payload: open,
})