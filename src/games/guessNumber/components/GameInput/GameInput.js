import React from 'react';
import { connect } from 'react-redux';
import {
    changeInput, clearInput,
    addGuessCount,
    guessTooHigh, guessTooLow, guessBingo, guessWrong,
    initialPreviousGuess, addPreviousGuess,
    resetButtonChange,
} from '../../actions';
import { checkNumber } from './checkNumber';

const ConnectGameInput = (props) => {
    return (
        <div className="form-inline">
            <div className="input-group mx-sm-3 mb-2">
                <input type="text" id="inputText" className="form-control" value={props.input} onChange={(e) => props.changeInput(e.target.value)} disabled={props.resetButton} />
            </div>
            <button type="button" id="inputButton" className="btn btn-outline-info mb-2" onClick={() => checkNumber(props)} disabled={props.resetButton}>confirm</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        input: state.inputReducer.input,
        previousGuess: state.previousGuessReducer.previousGuess,
        guessCount: state.guessCountReducer.guessCount,
        answer: state.answerReducer.answer,
        resetButton: state.resetButtonReducer.resetButton,
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        changeInput: (input) => dispatch(changeInput(input)),
        clearInput: () => dispatch(clearInput()),
        addGuessCount: () => dispatch(addGuessCount()),
        guessTooHigh: () => dispatch(guessTooHigh()),
        guessTooLow: () => dispatch(guessTooLow()),
        guessBingo: () => dispatch(guessBingo()),
        guessWrong: (num) => dispatch(guessWrong(num)),
        initialPreviousGuess: (num) => dispatch(initialPreviousGuess(num)),
        addPreviousGuess: (num) => dispatch(addPreviousGuess(num)),
        resetButtonChange: (open) => dispatch(resetButtonChange(open)),
    })
}

const GameInput = connect(mapStateToProps, mapDispatchToProps)(ConnectGameInput);

export { GameInput };