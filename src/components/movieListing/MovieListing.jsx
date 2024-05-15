import "./MovieListing.scss";
import { useSelector } from "react-redux";
import {
  selectMovies,
  selectMovieStatus,
} from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(selectMovies);
  const status = useSelector(selectMovieStatus);
  let renderMovies =
    status === "success" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>There is an error.</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
