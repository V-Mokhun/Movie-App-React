import { $host, MOVIE_BY_NAME_API_URL, PREMIERE_MOVIES_API_URL } from ".";
import { Months } from "../types/index";
import { MovieSearchResponse, PremiereMovieResponse } from "../types/responses";

export const fetchMovieBySearchQuery = (movie: string) => {
  const query = `${MOVIE_BY_NAME_API_URL}${movie}`;
  return $host.get<MovieSearchResponse>(query).then((res) => res.data);
};

export const fetchPremiereMovies = (year: number, month: Months) => {
  const query = `${PREMIERE_MOVIES_API_URL}year=${year}&month=${month}`;
  return $host.get<PremiereMovieResponse>(query).then((res) => res.data);
};
