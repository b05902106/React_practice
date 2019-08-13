import React from 'react';
import WIN from '../../../../imgs/guessNumber_win.jpg';
import { resetGame } from './resetGame';
import { connect } from 'react-redux';
import {
    setAnswer,
    clearGuessCount,
    clearInformation,
    clearPreviousGuess,
    resetButtonChange,
} from '../../actions'

const ConnectGameInformation = (props) => {
    return (
        <>
            <p>{props.previousGuess}</p>
            <p>{props.gameInformation}</p>
            {props.gameInformation === 'Bingo!!' && <img src={WIN} alt='this is a cat.' />}
            {props.resetButton && (<button type="button" className="btn btn-outline-warning mb-2" onClick={() => resetGame(props)}>Reset</button>)}
        </>
    )
}

const mapStateToProps = (state) => {
    return ({
        previousGuess: state.previousGuessReducer.previousGuess,
        gameInformation: state.gameInformationReducer.gameInformation,
        resetButton: state.resetButtonReducer.resetButton,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setAnswer: () => dispatch(setAnswer()),
        clearGuessCount: () => dispatch(clearGuessCount()),
        clearInformation: () => dispatch(clearInformation()),
        clearPreviousGuess: () => dispatch(clearPreviousGuess()),
        resetButtonChange: () => dispatch(resetButtonChange()),
    })
}

const GameInformation = connect(mapStateToProps, mapDispatchToProps)(ConnectGameInformation);
export { GameInformation };