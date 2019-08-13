import { GAMEOVERCOUNT } from '../../constants/initialData';

const checkNumber = (props) => {
    const num = parseInt(props.input);
    console.log('checkNumber props: ', props);
    if (num < 1 || num > 100 || isNaN(num)) {
        alert('Your input is out of range');
    }
    else {
        !props.guessCount
            ? props.initialPreviousGuess(num)
            : props.addPreviousGuess(num);
        props.addGuessCount();
        if (num > props.answer) props.guessTooHigh();
        else if (num < props.answer) props.guessTooLow();
        else {
            props.resetButtonChange(true);
            props.guessBingo();
        }
        if (props.guessCount >= GAMEOVERCOUNT - 1) {
            props.resetButtonChange(true);
            props.guessWrong(props.answer);
        }
    }
    props.clearInput();
    document.getElementById('inputText').focus();
}

export { checkNumber };