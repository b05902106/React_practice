import {
    RESET_BUTTON_CHANGE
} from '../constants/action-types';
import { initialData } from '../constants/initialData';

const resetButtonReducer = (state = initialData, action) => {
    switch (action.type) {
        case RESET_BUTTON_CHANGE:
            return ({ ...state, resetButton: action.payload });
        default:
            return (state);
    };
};

export { resetButtonReducer };