import apiConfig from "../common/apiConfig";

export const fetchMovie = async (term) => {
  const { data } = await apiConfig.get(
    `?apiKey=${import.meta.env.VITE_APIKey}&s=${term}&type=movie`
  );
  return data;
};

export const fetchShow = async (term) => {
  const { data } = await apiConfig.get(
    `?apiKey=${import.meta.env.VITE_APIKey}&s=${term}&type=series`
  );
  return data;
};

export const fetchDetails = async (id) => {
  const { data } = await apiConfig.get(
    `?apiKey=${import.meta.env.VITE_APIKey}&i=${id}&Plot=full`
  );
  return data;
};
