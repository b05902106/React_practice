import {
    GUESS_TOO_HIGH,
    GUESS_TOO_LOW,
    GUESS_BINGO,
    GUESS_WRONG,
    CLEAR_INFORMATION,
} from '../constants/action-types';
import { initialData } from '../constants/initialData';


const gameInformationReducer = (state = initialData, action) => {
    switch (action.type) {
        case GUESS_TOO_HIGH:
        case GUESS_TOO_LOW:
        case GUESS_BINGO:
        case GUESS_WRONG:
        case CLEAR_INFORMATION:
            return ({ ...state, gameInformation: action.payload });
        default:
            return (state)
    };
};

export { gameInformationReducer };