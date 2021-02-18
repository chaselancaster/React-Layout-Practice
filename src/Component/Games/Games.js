import React from "react";

import "./Games.css";

const Games = ({ games }) => {
  return (
    <div className="game-card-parent">
      {games.map((game, index) => {
        return (
          <div className="game-card">
            <div className="game-name">
              <h3>{game.name}</h3>
            </div>
            <div className="game-details">
              <p className="exclusive">{game.details[0]}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Games;
