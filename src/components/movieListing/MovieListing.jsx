import "./MovieListing.scss";
import { useSelector } from "react-redux";
import { selectMovies, selectShows } from "../../features/dataSlice";
import MovieCard from "../movieCard/MovieCard";
import Slider from "react-slick";

const MovieListing = () => {
  const movies = useSelector(selectMovies);
  const shows = useSelector(selectShows);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <div className="movie-container">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
