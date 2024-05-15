import apiConfig from "../../common/apiConfig";

export const fetchShow = async () => {
  const seriesText = "Friends";
  const { data } = await apiConfig.get(
    `?apiKey=${import.meta.env.VITE_APIKey}&s=${seriesText}&type=series`
  );
  return data;
};
