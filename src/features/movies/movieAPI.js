import movieAPI from "../../common/apiConfig";

export const fetchMovie = async () => {
  const movieText = "Harry";
  const { data } = await movieAPI.get(
    `?apiKey=${import.meta.env.VITE_APIKey}&s=${movieText}&type=movie`
  );
  console.log(data.Search)
  return data.Search;
};
