import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_URL = `https://kinopoiskapiunofficial.tech/api/`;
export const MOVIES_API_URL = `v2.2/films?`;
export const MOVIES_FILTERS_API_URL = `v2.2/films/filters`;
export const ONE_MOVIE_API_URL = `v2.2/films/`;
export const MOVIE_BY_NAME_API_URL = `v2.1/films/search-by-keyword?keyword=`;
export const PREMIERE_MOVIES_API_URL = `v2.2/films/premieres?`;
export const RELEASE_MOVIES_API_URL = `v2.1/films/releases?`;
export const TOP_MOVIES_API_URL = `v2.2/films/top?`;

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    "X-API-KEY": process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json",
  },
};

export const $host: AxiosInstance = axios.create(config);
