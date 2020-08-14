import React from "react";
import Heroes from "../data/heroes.json";

const MostPlayedHero = ({
  hero: {
    hero_id,
    games,
    win,
    with_games,
    with_win,
    against_games,
    against_win,
  },
}) => {
  return (
    <div className="flex-table row" role="rowgroup">
      <div className="flex-row first" role="cell">
        <span>{hero_id}</span>
      </div>
      <div className="flex-row" role="cell">
        {games}
      </div>
      <div className="flex-row" role="cell">
        {((win / games) * 100).toFixed(2)}
      </div>
    </div>
  );
};

export default MostPlayedHero;
