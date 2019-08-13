import { answerReducer } from './answerReducer';
import { gameInformationReducer } from './gameInformationReducer';
import { guessCountReducer } from './guessCountReducer';
import { inputReducer } from './inputReducer';
import { previousGuessReducer } from './previousGuessReducer';
import { resetButtonReducer } from './resetButtonReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    answerReducer,
    gameInformationReducer,
    guessCountReducer,
    inputReducer,
    previousGuessReducer,
    resetButtonReducer
});

export default rootReducer;