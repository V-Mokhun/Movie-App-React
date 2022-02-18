import { SequelAndPrequelMovie, Movie, PremiereMovie, ReleaseMovie, TopMovie, MovieBudget, SimilarMovie } from ".";

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

export interface MovieBudgetResponse {
  total: number;
  items: MovieBudget[];
}

export type MovieSequelsAndPrequelsResponse = SequelAndPrequelMovie[];

export interface MovieSimilarsResponse {
  total: number;
  items: SimilarMovie[];
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
