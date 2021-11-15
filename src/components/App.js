import date, { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div class="tabs">
          <div class="tab">Movies</div>
          <div class="tab">Favourites</div>
        </div>
        <div className="list">
          {data.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
