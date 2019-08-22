import React, { useState } from "react";
import Board from "./board";
import useStyles from "./style";
import { fill } from "lodash";
import calculateWinner from "./calculateWinner";
import GameInfo from "./gameInfo";

const GAMEOVERSCORE = 9;
let FIRSTPLAYER = true; // X

const BigBoard = () => {
  // State
  const [disabledBoard, setDisabledBoard] = useState(fill(Array(9), 0));
  const [boardValue, setBoardValue] = useState(
    fill(Array(9), fill(Array(9), ""))
  );
  const [isXNext, setIsXNext] = useState(FIRSTPLAYER);
  const [score, setScore] = useState([0, 0]);
  const [finishedBoard, setfinishedBoard] = useState(fill(Array(9), 0));

  const endGame = score[0] + score[1] === GAMEOVERSCORE ? true : false;

  // Function
  const clickSquare = (boardIdx, squareIdx) => {
    const nextPlayer = isXNext ? "X" : "O";
    console.log(`Click ${boardIdx} - ${squareIdx}`);
    if (boardValue[boardIdx][squareIdx] || endGame) return;
    const newBoardValue = JSON.parse(JSON.stringify(boardValue));
    newBoardValue[boardIdx][squareIdx] = nextPlayer;
    setBoardValue(newBoardValue);
    const newfinishedBoard = checkBoardFinished(newBoardValue, boardIdx);
    setIsXNext(!isXNext);
    if (newfinishedBoard[squareIdx]) {
      const newDisabledBoard = Array.from(newfinishedBoard);
      setDisabledBoard(newDisabledBoard);
    } else {
      const newDisabledBoard = fill(Array(9), 1);
      newDisabledBoard[squareIdx] = 0;
      setDisabledBoard(newDisabledBoard);
    }
    if (newfinishedBoard.reduce((prev, curr) => prev + curr) === GAMEOVERSCORE)
      gameOver();
  };

  const checkBoardFinished = (BoardValue, boardIdx) => {
    const winner = calculateWinner(BoardValue[boardIdx]);
    if (winner === 3) return finishedBoard;
    else if (winner === 0 || winner === 1) {
      const newScore = Array.from(score);
      newScore[winner] += 1;
      setScore(newScore);
    }
    const newfinishedBoard = Array.from(finishedBoard);
    newfinishedBoard[boardIdx] = 1;
    setfinishedBoard(newfinishedBoard);
    return newfinishedBoard;
  };

  const gameOver = () => {
    const newDisabledBoard = fill(Array(9), 0);
    setDisabledBoard(newDisabledBoard);
  };

  const resetGame = () => {
    setDisabledBoard(fill(Array(9), 0));
    setBoardValue(fill(Array(9), fill(Array(9), "")));
    FIRSTPLAYER = !FIRSTPLAYER;
    setIsXNext(FIRSTPLAYER);
    setScore([0, 0]);
    setfinishedBoard(fill(Array(9), 0));
  };

  const calculateFinalWinner = () => {
    if (score[0] > score[1]) return "winner is O !";
    else if (score[0] < score[1]) return "winner is X !";
    else return "It's a tie.";
  };

  const renderBoard = i => {
    return (
      <Board
        disabled={disabledBoard[i]}
        boardIdx={i}
        boardValue={boardValue[i]}
        clickSquare={clickSquare}
      />
    );
  };

  // Style
  const classes = useStyles();
  return (
    <div>
      <div>
        <GameInfo
          endGame={endGame}
          isXNext={isXNext}
          winner={calculateFinalWinner()}
        />
        <span>{`Score: O = ${score[0]}  X = ${score[1]}`}</span>
      </div>
      <div className={classes.bigBoardRow}>
        {renderBoard(0)}
        {renderBoard(1)}
        {renderBoard(2)}
      </div>
      <div className={classes.bigBoardRow}>
        {renderBoard(3)}
        {renderBoard(4)}
        {renderBoard(5)}
      </div>
      <div className={classes.bigBoardRow}>
        {renderBoard(6)}
        {renderBoard(7)}
        {renderBoard(8)}
      </div>
      {endGame && (
        <>
          <br />
          <button
            type="button"
            className="btn btn-outline-warning mb-2"
            onClick={resetGame}
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default BigBoard;
