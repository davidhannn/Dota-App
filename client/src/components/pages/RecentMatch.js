import React, { useContext, useEffect, Fragment } from "react";
import Heroes from "../../components/data/heroes.json";
import { Link } from "react-router-dom";

const RecentMatch = ({
  match: {
    assists,
    player_slot,
    deaths,
    duration,
    game_mode_name,
    hero_id,
    kills,
    last_hits,
    match_id,
    radiant_win,
    heroImgLink,
    hero_name,
  },
}) => {
  return (
    <Fragment>
      <div className="recent-match">
        <Link to={`/matches/${match_id}`}>
          <div className="recent-match-avatar-container">
            <img src={heroImgLink} />
            <p>{hero_name}</p>
          </div>
        </Link>
        <div className="recent-match-result-container">
          {player_slot < 4 && radiant_win ? (
            <h6 className="recent-match-result-container-won">Won Match</h6>
          ) : (
            <h6 className="recent-match-result-container-lost">Lost Match</h6>
          )}
        </div>
        <div className="recent-match-matchtype-container">{game_mode_name}</div>
        <div className="recent-match-duration-container">
          {(duration / 60).toFixed(2).replace(".", ":")}
        </div>
        <div className="recent-match-kda-container">
          {kills + "/" + deaths + "/" + assists}
        </div>
      </div>
    </Fragment>
  );
};

export default RecentMatch;
