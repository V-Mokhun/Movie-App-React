import { Movie, PremiereMovie, ReleaseMovie, TopMovie } from ".";

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
