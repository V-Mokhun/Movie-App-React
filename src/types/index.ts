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

export enum MovieOptionOrder {
  "RATING" = "RATING",
  "NUM_VOTE" = "NUM_VOTE",
  "YEAR" = "YEAR",
}

export enum MovieOptionType {
  "FILM" = "FILM",
  "TV_SHOW" = "TV_SHOW",
  "ALL" = "ALL",
}

export type MovieOptionRatingFrom = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

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

export type PremiereMovie = Omit<
  Movie,
  "filmId" | "type" | "description" | "filmLength" | "rating" | "ratingVoteCount"
> & {
  kinopoiskId: number;
  duration: number;
  premiereRu: string;
};

export type ReleaseMovie = Omit<Movie, "kinopoiskId" | "type" | "description" | "filmLength"> & {
  filmId: number;
  expectationsRating: number;
  expectationsRatingVoteCount: number;
  duration: number;
  releaseDate: string;
};

export type TopMovie = Omit<Movie, "kinopoiskId" | "type" | "description"> & {
  filmId: 263531;
};
