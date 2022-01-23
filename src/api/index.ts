import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_URL = `https://kinopoiskapiunofficial.tech/api/`;
export const MOVIE_BY_NAME_API_URL = `v2.1/films/search-by-keyword?keyword=`;

const config: AxiosRequestConfig = {
  baseURL: API_URL,
  headers: {
    "X-API-KEY": "f87a82d7-9b28-425f-9faa-3ca422df7518",
    "Content-Type": "application/json",
  },
};

export const $host: AxiosInstance = axios.create(config);
