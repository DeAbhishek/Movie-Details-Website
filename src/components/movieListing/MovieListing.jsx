import "./MovieListing.scss";
import { useSelector } from "react-redux";
import {
  selectMovies,
  selectMovieStatus,
} from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import { selectShows, selectShowStatus } from "../../features/shows/showSlice";

const MovieListing = () => {
  const movies = useSelector(selectMovies);
  const movieStatus = useSelector(selectMovieStatus);
  const shows = useSelector(selectShows);
  const showsStatus = useSelector(selectShowStatus);
  let renderMovies =
    movieStatus === "success" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="error">
        <h3>There is an error.</h3>
      </div>
    );

  let renderShows =
    showsStatus === "success" ? (
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
