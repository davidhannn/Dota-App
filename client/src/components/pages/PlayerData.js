import React, { Fragment, useEffect, useContext, useState } from "react";
import dotaContext from "../../context/dotaContext";
import RecentMatch from "./RecentMatch";
import Heroes from "../../components/data/heroes.json";
import GameMode from "../../components/data/gameMode.json";
import helper from "./helper.js";

const PlayerData = ({ match }) => {
  const DotaContext = useContext(dotaContext);
  const { player, matches, getPlayers, getRecentMatches } = DotaContext;

  useEffect(() => {
    getPlayers(match.params.id);
    getRecentMatches(match.params.id);
  }, [match.params.id]);

  const { competitive_rank, solo_competitive_rank, profile } = player;
  // console.log(player);
  // console.log(matches);

  const keys = Object.keys(Heroes);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    for (let j = 0; j < matches.length; j++) {
      if (matches[j].hero_id === Heroes[key].id) {
        const url = "http://cdn.dota2.com" + Heroes[key].img;
        matches[j]["hero_name"] = Heroes[key].localized_name;
        matches[j]["heroImgLink"] = url;
      }
    }
  }

  const gameModeKeys = Object.keys(GameMode);

  for (let i = 0; i < gameModeKeys.length; i++) {
    const key = gameModeKeys[i];
    for (let j = 0; j < matches.length; j++) {
      if (matches[j].game_mode === GameMode[key].id) {
        const game_mode_name = GameMode[key].name
          .replace("game_mode_", "")
          .replace("_", " ");
        matches[j]["game_mode_name"] = game_mode_name;
      }
    }
  }
  return (
    <Fragment>
      <div className="profile-container">
        <div className="profile-container__avatar">
          <img src={profile && profile.avatarmedium} />
        </div>
        <div className="profile-container__name">
          {profile && profile.personaname}
        </div>
        <div className="profile-container__ranking">
          <div className="profile-container__ranking-competitive-rank">
            Team MMR: {competitive_rank}
          </div>
          <div className="profile-container__ranking-solo-competitive-rank">
            Solo MMR: {solo_competitive_rank}
          </div>
        </div>
      </div>

      <h4>Recent Matches</h4>
      <div className="recent-matches-container">
        <div className="recent-matches-header">
          <p>Hero</p>
          <p>Result</p>
          <p>Match Type</p>
          <p>Duration</p>
          <p>K/D/A</p>
        </div>
        {/* <span>
          <strong>Hero</strong>
        </span>
        <span>
          <strong>Result</strong>
        </span>
        <span>
          <strong>Match Type</strong>
        </span>
        <span>
          <strong>Duration</strong>
        </span>
        <span>
          <strong>K/D/A</strong>
        </span> */}
        {matches.map((match, i) => (
          <RecentMatch match={match} key={i} />
        ))}
      </div>
    </Fragment>
  );
};

export default PlayerData;
