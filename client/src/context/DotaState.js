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
} from "./types";
import fetch from "node-fetch";

const DotaState = (props) => {
  const initialState = {
    heroes: [],
    items: [],
    players: [],
    matches: [],
    player: {},
    singleMatch: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(DotaReducer, initialState);

  //Get Heroes
  const getHeroes = async () => {
    //setLoading();
    // const apiKey = "?token=-Mf4hjaRoBa08P9s5rWg3WIOB2WvduxpRGNVC0fzIs7LicGa2EE";
    // const url = "https://api.pandascore.co/dota2/heroes";
    const response = await fetch(
      `https://api.opendota.com/api/heroStats`
    ).then((res) => res.json());

    dispatch({
      type: GET_HEROES,
      payload: response,
    });
  };

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
        setLoading,
        getHeroes,
        getItems,
        getPlayers,
        searchPlayers,
        getRecentMatches,
        getSingleMatch,
      }}
    >
      {props.children}
    </DotaContext.Provider>
  );
};

export default DotaState;
