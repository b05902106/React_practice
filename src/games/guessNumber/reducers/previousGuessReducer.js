import {
    INITIAL_PREVIOUS_GUESS,
    ADD_PREVIOUS_GUESS,
    CLEAR_PREVIOUS_GUESS,
} from '../constants/action-types';
import { initialData } from '../constants/initialData';

const previousGuessReducer = (state = initialData, action) => {
    switch (action.type) {
        case INITIAL_PREVIOUS_GUESS:
        case CLEAR_PREVIOUS_GUESS:
            return ({ ...state, previousGuess: action.payload });
        case ADD_PREVIOUS_GUESS:
            return ({ ...state, previousGuess: state.previousGuess + action.payload })
        default:
            return (state);
    };
};

export { previousGuessReducer };