import {
  MovieSequelsAndPrequelsType,
  MovieFact,
  Movie,
  PremiereMovie,
  ReleaseMovie,
  TopMovie,
  MovieBudget,
  SimilarMovie,
} from ".";

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

export interface MovieFactResponse {
  total: number;
  items: MovieFact[];
}

export interface MovieBudgetResponse {
  total: number;
  items: MovieBudget[];
}

export interface MovieSimilarsResponse {
  total: number;
  items: SimilarMovie[];
}

export interface MovieSequelsAndPrequelsResponse {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: MovieSequelsAndPrequelsType;
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
