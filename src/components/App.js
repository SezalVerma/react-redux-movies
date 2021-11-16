import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import React from "react";
import { addMovies, setShowFavourites } from "../actions";
import { StoreContext } from "../index";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    // make api call
    // dispatch actions
    store.dispatch(addMovies(data));
  }
  changeTab(val) {
    this.props.store.dispatch(setShowFavourites(val));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const idx = movies.favourites.indexOf(movie);
    if (idx !== -1) {
      // movie in favourites list
      return true;
    }
    return false;
  };

  render() {
    const { movies, search } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    const displayList = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.changeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => {
                this.changeTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayList.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayList.length === 0 ? (
            <div className="no-movies"> No Movies To Display ! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

// we exposed the wrapper class , so store from consumer is passed to whole App component as all methods
// of app need store but consumer can be called only in return method of class
class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}
export default AppWrapper;
