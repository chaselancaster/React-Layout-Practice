import React from "react";

const Games = ({ games }) => {
  return (
    <div>
      {games.map((game, index) => {
        return (
          <div className="game-card">
            <p>{game.name}</p>
            <p>{game.details[0]}</p>
            <p>This is the game description.</p>
          </div>
        );
      })}
    </div>
  );
};

export default Games;
