import { useDispatch } from "react-redux";
import MovieListing from "../movieListing/MovieListing";
import { useEffect } from "react";
import { fetchMovieByAsync } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieByAsync());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
