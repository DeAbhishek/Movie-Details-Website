import "./Header.scss";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovieByAsync, fetchShowByAsync } from "../../features/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
    dispatch(fetchMovieByAsync(term));
    dispatch(fetchShowByAsync(term));
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
