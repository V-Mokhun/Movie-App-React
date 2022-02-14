import { Movie, PremiereMovie, ReleaseMovie, TopMovie } from ".";

export interface MovieResponse {
  total: number;
  totalPages: number;
  items: Movie[];
}

export interface MovieFilterResponse {
  genres: { id: number; genre: string }[];
  countries: { id: number; country: string }[];
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
