import apiConfig from "../common/apiConfig";

export const fetchMovie = async () => {
  const movieText = "Harry";
  const { data } = await apiConfig.get(
    `?apiKey=${import.meta.env.VITE_APIKey}&s=${movieText}&type=movie`
  );
  return data;
};

export const fetchShow = async () => {
  const seriesText = "Friends";
  const { data } = await apiConfig.get(
    `?apiKey=${import.meta.env.VITE_APIKey}&s=${seriesText}&type=series`
  );
  return data;
};

export const fetchDetails = async (id) => {
  const { data } = await apiConfig.get(
    `?apiKey=${import.meta.env.VITE_APIKey}&i=${id}&Plot=full`
  );
  return data;
};
