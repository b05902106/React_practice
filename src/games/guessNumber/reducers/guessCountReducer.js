import {
    ADD_GUESS_COUNT, CLEAR_GUESS_COUNT
} from '../constants/action-types';
import { initialData } from '../constants/initialData';


const guessCountReducer = (state = initialData, action) => {
    switch (action.type) {
        case ADD_GUESS_COUNT:
            return ({ ...state, guessCount: state.guessCount + action.payload });
        case CLEAR_GUESS_COUNT:
            return ({ ...state, guessCount: action.payload });
        default:
            return (state);
    };
};

export { guessCountReducer };