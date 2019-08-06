import React, { useState } from "react";
import WIN from '../imgs/guessNumber_win.jpg';

const GAMEOVERTIME = 5;

const GuessNumber = () => {
    const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1);
    console.log('answer: ', answer);
    const [input, setInput] = useState('');
    const [previousGuess, setPreviousGuess] = useState('');
    const [guessCount, setGuessCount] = useState(0);
    const [gameInformation, setGameInformation] = useState('');
    const [resetButton, setResetButton] = useState(false);

    const checkNumber = () => {
        const num = parseInt(input);
        if (num < 1 || num > 100 || isNaN(num)) {
            alert('Your input is out of range!!');
        }
        else {
            !guessCount ? setPreviousGuess(`Previous Guess: ${num}`) : setPreviousGuess(previousGuess + ` ${num}`);
            setGuessCount(guessCount + 1);
            if (num > answer) setGameInformation('Last guess was too high.');
            else setGameInformation('Last guess was too low.');
            if (num === answer) {
                setGameover();
                setGameInformation('Bingo!!');
            }
            else if (guessCount === GAMEOVERTIME - 1) {
                setGameover();
                setGameInformation((gameInformation) => { return ' Game over. The answer is ' + answer })
            };

        }
        setInput('');
        document.getElementById('inputText').focus();
    }

    const setGameover = () => {
        setResetButton(true);
        document.getElementById('inputText').disabled = true;
        document.getElementById('inputButton').disabled = true;
    }

    const resetGame = () => {
        setResetButton(false);
        document.getElementById('inputText').disabled = false;
        document.getElementById('inputButton').disabled = false;
        setAnswer(Math.floor(Math.random() * 100) + 1);
        setPreviousGuess('');
        setGuessCount(0);
        setGameInformation('');
        document.getElementById('inputText').focus();
    }

    return (
        <div>
            <p>
                We have selected a random number between 1 and 100.
                <br /><br />
                See if you can guess it in {GAMEOVERTIME} turns or fewer.
                <br /><br />
                We'll tell you if your guess was too high or too low.
                <br /><br />
            </p>
            <div className="form-inline">
                <div className="input-group mx-sm-3 mb-2">
                    <input type="text" id="inputText" className="form-control" value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
                <button type="button" id="inputButton" className="btn btn-outline-info mb-2" onClick={checkNumber}>confirm</button>
            </div>
            <p>{previousGuess}</p>
            <p>{gameInformation}</p>
            {gameInformation === 'Bingo!!' && <img src={WIN} alt='this is a cat.' />}
            {resetButton && (<button type="button" className="btn btn-outline-warning mb-2" onClick={resetGame}>Reset</button>)}
        </div>
    )
}

export default GuessNumber;