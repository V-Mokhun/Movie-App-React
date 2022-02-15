import {
  $host,
  MOVIE_BY_NAME_API_URL,
  PREMIERE_MOVIES_API_URL,
  RELEASE_MOVIES_API_URL,
  TOP_MOVIES_API_URL,
  MOVIES_API_URL,
  MOVIES_FILTERS_API_URL,
  ONE_MOVIE_API_URL,
} from ".";
import { Months, MovieOptionType, MovieOptionOrder, MovieOptionRatingFrom, DetailedMovie } from "../types/index";
import {
  MovieBudgetResponse,
  MovieFactResponse,
  MovieFilterResponse,
  MovieResponse,
  MovieSearchResponse,
  PremiereMovieResponse,
  ReleaseMovieResponse,
  TopMovieResponse,
  MovieSequelsAndPrequelsResponse,
  MovieSimilarsResponse,
} from "../types/responses";

export interface MoviesOptions {
  genre?: number;
  country?: number;
  order?: MovieOptionOrder;
  type?: MovieOptionType;
  ratingFrom?: MovieOptionRatingFrom;
}

export const fetchMovies = async (options: MoviesOptions, page = 1) => {
  let query = `${MOVIES_API_URL}page=${page}`;
  const { order, ratingFrom, type, country, genre } = options;

  if (order) {
    query += `&order=${order}`;
  }

  if (ratingFrom) {
    query += `&ratingFrom=${ratingFrom}`;
  }

  if (type) {
    query += `&type=${type}`;
  }

  if (country) {
    query += `&countries=${country}`;
  }

  if (genre) {
    query += `&genres=${genre}`;
  }

  const res = await $host.get<MovieResponse>(query);

  return res.data;
};

export const fetchMoviesFilters = async () => {
  const query = `${MOVIES_FILTERS_API_URL}`;
  const res = await $host.get<MovieFilterResponse>(query);
  return res.data;
};

export const fetchOneMovie = async (id: number) => {
  const query = `${ONE_MOVIE_API_URL}${id}`;
  const res = await $host.get<DetailedMovie>(query);
  return res.data;
};

export const fetchOneMovieFacts = async (id: number) => {
  const query = `${ONE_MOVIE_API_URL}${id}/facts`;
  const res = await $host.get<MovieFactResponse>(query);
  return res.data;
};

export const fetchOneMovieBudget = async (id: number) => {
  const query = `${ONE_MOVIE_API_URL}${id}/box_office`;
  const res = await $host.get<MovieBudgetResponse>(query);
  return res.data;
};

export const fetchOneMovieSimilars = async (id: number) => {
  const query = `${ONE_MOVIE_API_URL}${id}/similars`;
  const res = await $host.get<MovieSimilarsResponse>(query);
  return res.data;
};

export const fetchOneMovieSequelsAndPrequels = async (id: number) => {
  const query = `${ONE_MOVIE_API_URL.replace("v2.2", "v2.1")}${id}/sequels_and_prequels`;
  const res = await $host.get<MovieSequelsAndPrequelsResponse>(query);
  return res.data;
};

export const fetchMovieBySearchQuery = async (movie: string, page = 1) => {
  const query = `${MOVIE_BY_NAME_API_URL}${movie}&page=${page}`;
  const res = await $host.get<MovieSearchResponse>(query);
  return res.data;
};

export const fetchPremiereMovies = async (year: number, month: Months) => {
  const query = `${PREMIERE_MOVIES_API_URL}year=${year}&month=${month}`;
  const res = await $host.get<PremiereMovieResponse>(query);
  return res.data;
};

export const fetchReleaseMovies = async (year: number, month: Months, page = 1) => {
  const query = `${RELEASE_MOVIES_API_URL}year=${year}&month=${month}&page=${page}`;
  const res = await $host.get<ReleaseMovieResponse>(query);
  return res.data;
};

type TopMoviesTypes = "TOP_250_BEST_FILMS" | "TOP_100_POPULAR_FILMS" | "TOP_AWAIT_FILMS";

export const fetchTopMovies = async (page = 1, type: TopMoviesTypes = "TOP_250_BEST_FILMS") => {
  const query = `${TOP_MOVIES_API_URL}page=${page}&type=${type}`;
  const res = await $host.get<TopMovieResponse>(query);
  return res.data;
};
