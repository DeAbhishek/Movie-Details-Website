import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>{params.imdbID}</h1>
    </div>
  );
};

export default MovieDetail;
