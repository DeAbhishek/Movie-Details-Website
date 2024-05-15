import { useDispatch } from "react-redux";
import MovieListing from "../movieListing/MovieListing";
import { useEffect } from "react";
import { fetchMovieByAsync, fetchShowByAsync } from "../../features/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchMovieByAsync(movieText));
    dispatch(fetchShowByAsync(showText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
