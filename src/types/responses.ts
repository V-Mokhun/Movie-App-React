import { Movie, PremiereMovie, ReleaseMovie, TopMovie } from ".";

export interface MovieResponse {
  total: number;
  totalPages: number;
  items: Movie[];
}

export type MovieFilterGenres = { id: number; genre: string }[];
export type MovieFilterCountries = { id: number; country: string }[];

export interface MovieFilterResponse {
  genres: MovieFilterGenres;
  countries: MovieFilterCountries;
}

export interface MovieSearchResponse {
  keyword: string;
  pagesCount: number;
  searchFilmsCountResult: number;
  films: Movie[];
}

export interface PremiereMovieResponse {
  total: number;
  items: PremiereMovie[];
}

export interface ReleaseMovieResponse {
  page: number;
  total: number;
  releases: ReleaseMovie[];
}

export interface TopMovieResponse {
  pagesCount: number;
  films: TopMovie[];
}
