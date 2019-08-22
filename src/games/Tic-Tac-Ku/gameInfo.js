import React from "react";

const GameInfo = ({ endGame, isXNext, winner }) => {
  const gameInformation = endGame ? (
    <>
      {winner}
      <br />
    </>
  ) : (
    <>
      <span>{`next player: ${isXNext ? "X" : "O"}`}</span>
      <br />
    </>
  );
  return gameInformation;
};

export default GameInfo;
