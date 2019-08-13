const resetGame = (props) => {
    props.setAnswer();
    props.clearGuessCount();
    props.clearInformation();
    props.clearPreviousGuess();
    props.resetButtonChange(false);
}

export { resetGame };