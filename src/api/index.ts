import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_URL = `https://kinopoiskapiunofficial.tech/api/`;
export const MOVIE_BY_NAME_API_URL = `v2.1/films/search-by-keyword?keyword=`;
export const PREMIERE_MOVIES_API_URL = `v2.2/films/premieres?`;
export const RELEASE_MOVIES_API_URL = `v2.1/films/releases?`;
export const TOP_MOVIES_API_URL = `v2.2/films/top?`;

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    "X-API-KEY": "f87a82d7-9b28-425f-9faa-3ca422df7518",
    "Content-Type": "application/json",
  },
};

export const $host: AxiosInstance = axios.create(config);
