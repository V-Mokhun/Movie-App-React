export enum MovieTypes {
  "FILM" = "Film",
  "TV SHOW" = "TV Show",
  "UNKNOWN" = "Unknown",
}

export enum Months {
  JANUARY = "JANUARY",
  FEBRUARY = "FEBRUARY",
  MARCH = "MARCH",
  APRIL = "APRIL",
  MAY = "MAY",
  JUNE = "JUNE",
  JULY = "JULY",
  AUGUST = "AUGUST",
  SEPTEMBER = "SEPTEMBER",
  OCTOBER = "OCTOBER",
  NOVEMBER = "NOVEMBER",
  DECEMBER = "DECEMBER",
}

export type MovieGenres = {
  genre: string;
}[];

export type MovieCountries = {
  country: string;
}[];

export interface Movie {
  kinopoiskId?: number;
  filmId?: number;
  nameRu: string;
  nameEn: string;
  type: MovieTypes;
  year: string | number;
  description: string;
  filmLength: string | number;
  countries: MovieCountries;
  genres: MovieGenres;
  rating: string | number;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface DetailedMovie extends Movie {
  kinopoiskId: number;
  imdbId: string | null;
  reviewsCount: number | null;
  ratingGoodReview: number | null;
  ratingGoodReviewVoteCount: number | null;
  ratingKinopoisk: number | null;
  ratingKinopoiskVoteCount: number | null;
  ratingImdb: number | null;
  ratingImdbVoteCount: number | null;
  ratingFilmCritics: number | null;
  ratingFilmCriticsVoteCount: number | null;
  ratingAwait: number | null;
  ratingAwaitCount: number | null;
  ratingRfCritics: number | null;
  ratingRfCriticsVoteCount: number | null;
  webUrl: string | null;
  slogan: string | null;
  description: string;
  shortDescription: string | null;
  editorAnnotation: string | null;
  isTicketsAvailable: boolean;
  productionStatus: string | null;
  ratingMpaa: string | null;
  ratingAgeLimits: string | null;
  hasImax: boolean | null;
  has3D: boolean | null;
  lastSync: string;
  startYear: number | null;
  endYear: number | null;
  serial?: boolean;
  shortFilm?: boolean;
  completed?: boolean;
}

export interface PremiereMovie {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: MovieCountries;
  genres: MovieGenres;
  duration: number;
  premiereRu: string;
}

export interface ReleaseMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  year: number;
  posterUrl: string;
  posterUrlPreview: string;
  countries: MovieCountries;
  genres: MovieGenres;
  rating: number;
  ratingVoteCount: number;
  expectationsRating: number;
  expectationsRatingVoteCount: number;
  duration: number;
  releaseDate: string;
}
