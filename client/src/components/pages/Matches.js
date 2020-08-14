import React, { Fragment, useEffect, useContext, useState } from "react";
import dotaContext from "../../context/dotaContext";
import RecentMatch from "./RecentMatch";
import Heroes from "../../components/data/heroes.json";
import GameMode from "../../components/data/gameMode.json";
import lobbyType from "../../components/data/lobbyType.json";
import Radiant from "./Radiant";
import Dire from "./Dire";

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

        <div className="radiant">The Radiant</div>

        <table className="radiant-match-container">
          <thead>
            <tr className="team-table header">
              <th className="team-row first">Hero</th>
              <th className="team-row player">Player</th>
              <th className="team-row kills">K</th>
              <th className="team-row">D</th>
              <th className="team-row">A</th>
              <th className="team-row">LH</th>
              <th className="team-row">DN</th>
              <th className="team-row">GPM</th>
              <th className="team-row">XPM</th>
              <th className="team-row">DMG</th>
              <th className="team-row">Heal</th>
              <th className="team-row items">Items</th>
            </tr>
          </thead>
          <tbody>
            {singleMatch.players &&
              singleMatch.players.map((player) =>
                player.player_slot <= 4 ? <Radiant player={player} /> : null
              )}
          </tbody>
        </table>

        <div className="dire">The Dire</div>

        <table className="radiant-match-container">
          <thead>
            <tr className="team-table header">
              <th className="team-row first">Hero</th>
              <th className="team-row player">Player</th>
              <th className="team-row kills">K</th>
              <th className="team-row">D</th>
              <th className="team-row">A</th>
              <th className="team-row">LH</th>
              <th className="team-row">DN</th>
              <th className="team-row">GPM</th>
              <th className="team-row">XPM</th>
              <th className="team-row">DMG</th>
              <th className="team-row">Heal</th>
              <th className="team-row items">Items</th>
            </tr>
          </thead>
          <tbody>
            {singleMatch.players &&
              singleMatch.players.map((player) =>
                player.player_slot > 5 ? <Radiant player={player} /> : null
              )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Matches;
