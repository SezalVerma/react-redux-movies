import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_SHOW_FAVOURITES,
  ADD_SEARCH_RESULT,
} from "../actions";

// **************************** Movies Reducer  ************************************************

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
//if no state is provided to StorageEvent, it takes the store passed to reducer
export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_MOVIE_TO_LIST: {
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    }
    case ADD_TO_FAVOURITES: {
      // spread prev state & add new movie at first idx , then spread already existing movies in favourites
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    }
    case REMOVE_FROM_FAVOURITES: {
      // get array without the given movie in action
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    }
    case SET_SHOW_FAVOURITES: {
      return {
        ...state,
        showFavourites: action.val,
      };
    }
    default:
      return state;
  }
}

// **************************** Search Reducer  **************************************************

const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST: {
      return {
        ...state,
        showSearchResults: false,
      };
    }
    default:
      return state;
  }
}

// **************************** Root Reducer **********************************

/* const initialRootState = {
  movies: initialMoviesState,
  search: initialSearchState,
};
export default function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
} */

export default combineReducers({
  movies,
  search,
});
