import React, { useReducer } from "react";
import DotaContext from "./dotaContext";
import DotaReducer from "./dotaReducer";
import axios from "axios";

import {
  GET_HEROES,
  SET_LOADING,
  GET_ITEMS,
  GET_PLAYERS,
  SEARCH_PLAYERS,
  GET_RECENT_MATCHES,
  GET_SINGLE_MATCH,
  GET_MOST_PLAYED_HEROES,
} from "./types";
import fetch from "node-fetch";

// const heroInfo = [];
// Object.keys(HeroNames).map((key, i) => {
//   heroInfo[i] = HeroNames[key];
// });

const DotaState = (props) => {
  const initialState = {
    heroes: [],
    heroData: [],
    items: [],
    players: [],
    matches: [],
    mostPlayedHeroes: [],
    player: {},
    singleMatch: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(DotaReducer, initialState);

  //Get Heroes
  const getHeroes = async () => {
    const response = await fetch(
      `https://api.opendota.com/api/heroStats`
    ).then((res) => res.json());

    dispatch({
      type: GET_HEROES,
      payload: response,
    });
  };

  //Get Hero Data
  // const getHeroData = async (heroName) => {};

  // Get Items
  const getItems = async () => {
    const response = await fetch("/items").then((res) => res.json());

    dispatch({
      type: GET_ITEMS,
      payload: response.items,
    });
  };

  // Get Players
  const getPlayers = async (text) => {
    const response = await fetch(`/players/${text}`).then((res) => res.json());

    dispatch({
      type: GET_PLAYERS,
      payload: response.data.list,
    });
  };

  // Search Players
  const searchPlayers = async (text) => {
    const response = await fetch(
      `https://api.opendota.com/api/search?q=${text}`
    ).then((res) => res.json());

    dispatch({
      type: SEARCH_PLAYERS,
      payload: response,
    });
  };

  //Get Recent Matches
  const getRecentMatches = async (id) => {
    const response = await fetch(
      `https://api.opendota.com/api/players/${id}/recentMatches`
    ).then((res) => res.json());

    dispatch({
      type: GET_RECENT_MATCHES,
      payload: response,
    });
  };

  //Get Match
  const getSingleMatch = async (id) => {
    const response = await fetch(
      `https://api.opendota.com/api/matches/${id}`
    ).then((res) => res.json());

    dispatch({
      type: GET_SINGLE_MATCH,
      payload: response,
    });
  };

  //Get Most Played Heroes
  const getMostPlayedHeroes = async (id) => {
    const response = await fetch(
      `https://api.opendota.com/api/players/${id}/heroes`
    ).then((res) => res.json());

    dispatch({
      type: GET_MOST_PLAYED_HEROES,
      payload: response,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <DotaContext.Provider
      value={{
        heroes: state.heroes,
        items: state.items,
        loading: state.loading,
        player: state.player,
        players: state.players,
        matches: state.matches,
        singleMatch: state.singleMatch,
        mostPlayedHeroes: state.mostPlayedHeroes,
        setLoading,
        getHeroes,
        getItems,
        getPlayers,
        searchPlayers,
        getRecentMatches,
        getSingleMatch,
        getMostPlayedHeroes,
      }}
    >
      {props.children}
    </DotaContext.Provider>
  );
};

export default DotaState;
