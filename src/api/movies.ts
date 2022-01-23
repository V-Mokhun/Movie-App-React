import { $host, MOVIE_BY_NAME_API_URL } from ".";
import { MovieSearchResponse } from "../types";

export const fetchMovieBySearchQuery = (movie: string) => {
  const query = `${MOVIE_BY_NAME_API_URL}${movie}`;
  return $host.get<MovieSearchResponse>(query).then((res) => res.data);
};
