import React, { Component } from "react";
import { addMovieToList, handleMovieSearch } from "../actions";
import { connect } from "../index";

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
  };
  handleSearch = () => {
    const { searchText } = this.state;

    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    const { result, showSearchResults } = this.props.search;

    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  <button onClick={() => this.handleAddToMovies(result)}>
                    Add To Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// destructuring state in args
function mapStateToProps({ search }) {
  return {
    search,
  };
}
export default connect(mapStateToProps)(Navbar);
