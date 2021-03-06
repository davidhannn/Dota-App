import React, { Fragment, useEffect, useContext, useState } from "react";
import dotaContext from "../../context/dotaContext";
import RecentMatch from "./RecentMatch";
import MostPlayedHero from "./MostPlayedHero";
import Heroes from "../../components/data/heroes.json";
import GameMode from "../../components/data/gameMode.json";
import helper from "./helper.js";

const PlayerData = ({ match }) => {
  const DotaContext = useContext(dotaContext);
  const {
    player,
    matches,
    mostPlayedHeroes,
    getPlayers,
    getRecentMatches,
    getMostPlayedHeroes,
  } = DotaContext;

  useEffect(() => {
    getPlayers(match.params.id);
    getRecentMatches(match.params.id);
    getMostPlayedHeroes(match.params.id);
  }, [match.params.id]);

  const { competitive_rank, solo_competitive_rank, profile } = player;
  // console.log(player);
  // console.log(matches);
  console.log(mostPlayedHeroes);

  const keys = Object.keys(Heroes);

  // Function to retrieve Hero ID from player's recent match API call and create the Hero Img
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

  // const heroKeys = Object.keys(Heroes);
  // // Function to retrieve Hero ID from player's recent match API call and create the Hero Img
  // for (let i = 0; i < heroKeys.length; i++) {
  //   const key = heroKeys[i];
  //   for (let j = 0; j < mostPlayedHeroes.length; j++) {
  //     if (mostPlayedHeroes[j].hero_id === Heroes[key].id) {
  //       const url = "http://cdn.dota2.com" + Heroes[key].img;
  //       mostPlayedHeroes[j]["hero_name"] = Heroes[key].localized_name;
  //       mostPlayedHeroes[j]["heroImgLink"] = url;
  //     }
  //   }
  // }

  // console.log(mostPlayedHeroes);

  const gameModeKeys = Object.keys(GameMode);

  // Function to identify Game mode Type by matching the Game mode ID with the local data stored in gameMode.json file
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

      {/* <h4 className="most-played-heroes-title">Most Played Heroes</h4>
      <div className="most-played-heroes-container" role="table">
        <div className="flex-table header" role="rowgroup">
          <div className="flex-row first" role="columnheader">
            Hero
          </div>
          <div className="flex-row" role="columnheader">
            Matches
          </div>
          <div className="flex-row" role="columnheader">
            Win%
          </div>
        </div>
        {mostPlayedHeroes.map((hero, i) =>
          i < 10 ? <MostPlayedHero hero={hero} key={i} /> : null
        )}
      </div> */}

      <h4 className="recent-matches-title">Recent Matches</h4>
      <table className="recent-matches-container">
        <tr className="recent-matches-header">
          <th>Hero</th>
          <th>Result</th>
          <th>Match Type</th>
          <th>Duration</th>
          <th>K/D/A</th>
        </tr>
        <tbody>
          {matches.map((match, i) => (
            <RecentMatch match={match} key={i} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default PlayerData;
