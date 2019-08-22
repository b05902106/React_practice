import React from "react";
import useStyles from "./style";

const Square = props => {
  const classes = useStyles();
  return (
    <button
      className={classes.square}
      disabled={props.disabled}
      style={{ background: props.disabled ? "#FFF8DC" : "#FFFFFF" }}
      onClick={() => props.clickSquare(props.boardIdx, props.squareIdx)}
    >
      {props.value}
    </button>
  );
};

export default Square;
