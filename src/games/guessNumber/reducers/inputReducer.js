import {
    CLEAR_INPUT, CHANGE_INPUT
} from '../constants/action-types';
import { initialData } from '../constants/initialData';

const inputReducer = (state = initialData, action) => {
    switch (action.type) {
        case CLEAR_INPUT:
        case CHANGE_INPUT:
            return ({ ...state, input: action.payload });
        default:
            return (state);
    };
};

export { inputReducer };
