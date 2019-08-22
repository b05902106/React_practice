import React from "react";
import Square from "./square";
import useStyles from "./style";

const Board = props => {
  const classes = useStyles();
  const renderSquare = i => {
    return (
      <Square
        value={props.boardValue[i]}
        disabled={props.disabled}
        boardIdx={props.boardIdx}
        squareIdx={i}
        clickSquare={props.clickSquare}
      />
    );
  };
  return (
    <div className={classes.board}>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
