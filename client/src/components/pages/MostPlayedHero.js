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
    <tbody>
      <tr>
        <td>{hero_id}</td>
        <td>{games}</td>
        <td>{(win / games).toFixed(2)}</td>
      </tr>
    </tbody>
  );
};

export default MostPlayedHero;
