import {
  GET_HEROES,
  GET_ITEMS,
  SET_LOADING,
  GET_PLAYERS,
  SEARCH_PLAYERS,
  GET_RECENT_MATCHES,
  GET_SINGLE_MATCH,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_HEROES:
      return {
        ...state,
        heroes: action.payload,
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PLAYERS:
      return {
        ...state,
        player: action.payload,
        loading: true,
      };
    case SEARCH_PLAYERS:
      return {
        ...state,
        players: action.payload,
        loading: true,
      };
    case GET_RECENT_MATCHES:
      return {
        ...state,
        matches: action.payload,
        loading: true,
      };
    case GET_SINGLE_MATCH:
      return {
        ...state,
        singleMatch: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
