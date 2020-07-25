import React, { Fragment, useEffect, useContext, useState } from "react";
import dotaContext from "../../context/dotaContext";
import RecentMatch from "./RecentMatch";
import MatchesPlayerData from "./MatchesPlayerData";
import Heroes from "../../components/data/heroes.json";
import GameMode from "../../components/data/gameMode.json";
import lobbyType from "../../components/data/lobbyType.json";

const Matches = ({ match }) => {
  const DotaContext = useContext(dotaContext);
  const { player, singleMatch, getSingleMatch } = DotaContext;

  useEffect(() => {
    getSingleMatch(match.params.id);
  }, []);

  return (
    <Fragment>
      <div className="match-container">
        <div className="match-details-container">
          <div className="match-details-id-container">
            <div className="match-details-id">Match {singleMatch.match_id}</div>
          </div>
          <div className="match-details-secondary-container">
            <dl>
              <dt>
                {singleMatch.skill > 2 ? (
                  <p>Very High Skill</p>
                ) : singleMatch.skill < 2 ? (
                  <p>Normal Skill</p>
                ) : (
                  <p>High Skill</p>
                )}
              </dt>
              <dd>Skill Type</dd>
            </dl>
          </div>
        </div>

        <div className="match-result-container">
          <div className="match-result">
            {singleMatch.radiant_win ? (
              <h2 className="radiant">Radiant Wins!</h2>
            ) : (
              <h2 className="dire">Dire Wins!</h2>
            )}
          </div>
          <div className="match-score-container">
            <h3 className="radiant">{singleMatch.radiant_score}</h3>
            <h4>{(singleMatch.duration / 60).toFixed(2).replace(".", ":")}</h4>
            <h3 className="dire">{singleMatch.dire_score}</h3>
          </div>
        </div>
        {singleMatch.players &&
          singleMatch.players.map((player) => (
            <MatchesPlayerData players={player} />
          ))}
        {/* <MatchesPlayerData players={singleMatch.players} /> */}
      </div>
    </Fragment>
  );
};

export default Matches;
