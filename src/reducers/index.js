import {
  ADD_MOVIES,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
};
//if no state is provided to StorageEvent, it takes the store passed to reducer
export default function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
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
    default:
      return state;
  }
}
