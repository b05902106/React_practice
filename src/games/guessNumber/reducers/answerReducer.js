import { SET_ANSWER } from '../constants/action-types';
import { initialData } from '../constants/initialData';

const answerReducer = (state = initialData, action) => {
    switch (action.type) {
        case SET_ANSWER:
            return ({ ...state, answer: action.payload });
        default:
            return state;
    };
};

export { answerReducer };