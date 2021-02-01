import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  spotify: null,
  top_artists: null,
  discover_Weekly: null,

  //remove after finishing...
  //token:"BQCOrufGNf1gtez59Pvx6kJEQAV5tkgClGHbfEYV7mY1jalM9T4CMqTlEzsYVGK8v8rxMiGS30JnuQWQGLrsqVOSWRJSmqZXPNd5OmNf-VYY-_pcdfGu4nQZA8efhOksRrGsj5GTpVoRBEuOtT-gA8zEEPjJPKgIjobceQs_Y1S1Z-sB4pKs",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_Weekly: action.discover_Weekly,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    default:
      return state;
  }
};
export default reducer;
