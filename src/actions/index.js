// {
//   type: "ADD_MOVIES";
//   movies: [];
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

// action creators
export function addMovies(movies) {
  return {
    type: "ADD_MOVIES",
    movies,
  };
}

export function addMovieToList(movie) {
  return {
    type: "ADD_MOVIE_TO_LIST",
    movie,
  };
}
export function addToFavourites(movie) {
  return {
    type: "ADD_TO_FAVOURITES",
    movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: "REMOVE_FROM_FAVOURITES",
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: "SET_SHOW_FAVOURITES",
    val,
  };
}

export function handleMovieSearch(movieName) {
  // using omdb api
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=464d140c&t=${movieName}`;
  // async action
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);

        //dispatch action to add movie to store
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
