import { ADD_MOVIES } from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
};
//if no state is provided to StorageEvent, it takes the store passed to reducer
export default function movies(state = initialMoviesState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
