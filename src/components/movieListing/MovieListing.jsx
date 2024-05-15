import "./MovieListing.scss";
import { useSelector } from "react-redux";
import { selectMovies, selectShows } from "../../features/dataSlice";
import MovieCard from "../movieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(selectMovies);
  const shows = useSelector(selectShows);
  let renderMovies = movies.Response ? (
    movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  ) : (
    <div className="error">
      <h3>There is an error.</h3>
    </div>
  );

  let renderShows = shows.Response ? (
    shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  ) : (
    <div className="error">
      <h3>There is an error.</h3>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
