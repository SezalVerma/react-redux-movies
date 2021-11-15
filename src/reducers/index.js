import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE } from "../actions";

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
    case ADD_FAVOURITE: {
      // spread prev state & add new movie at first idx , then spread already existing movies in favourites
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    }
    case REMOVE_FAVOURITE: {
      // spread prev state & add new movie at first idx , then spread already existing movies in favourites
      return {
        ...state,
        favourites: [],
      };
    }
    default:
      return state;
  }
}
