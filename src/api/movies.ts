import { $host, MOVIE_BY_NAME_API_URL, PREMIERE_MOVIES_API_URL, RELEASE_MOVIES_API_URL, TOP_MOVIES_API_URL } from ".";
import { Months } from "../types/index";
import { MovieSearchResponse, PremiereMovieResponse, ReleaseMovieResponse, TopMovieResponse } from "../types/responses";

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
