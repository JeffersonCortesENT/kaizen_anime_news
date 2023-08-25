import axios from "axios";

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchUpcoming = () => {
  return axios.get('/get-upcoming');
};

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

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchAnimeSearch = (oParams) => {
  return axios.get('/get-anime-search', { params: oParams });
};

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchAnimeFull = (iMalId) => {
  return axios.get('/get-anime-full/' + iMalId);
};

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchAnimeChars = (iMalId) => {
  return axios.get('/get-anime-chars/' + iMalId);
};

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchAnimeStaff = (iMalId) => {
  return axios.get('/get-anime-staff/' + iMalId);
};

/**
 * Function for saving appointment
 * @param oQuery
 * @return {Promise<AxiosResponse<T>>}
 */
export const fetchAnimePictures = (iMalId) => {
  return axios.get('/get-anime-pictures/' + iMalId);
};


