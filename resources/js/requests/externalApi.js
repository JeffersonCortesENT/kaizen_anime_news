import axios from "axios";

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchAnimeNews = () => {
  return axios.get('/get-anime-news');
};

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchTop10Seasonal = () => {
  return axios.get('/get-top10-seasonal');
};

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchTop10Anime = () => {
  return axios.get('/get-top10-anime');
};


