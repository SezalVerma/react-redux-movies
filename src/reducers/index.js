import { ADD_MOVIES } from "../actions";

//if no state is provided to StorageEvent, it takes the store passed to reducer
export default function movies(state = [], action) {
  if (action.type === ADD_MOVIES) {
    return action.movies;
  }
  return state;
}
