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

enum MovieProductionStatus {
  FILMING = "FILMING",
  PRE_PRODUCTION = "PRE_PRODUCTION",
  COMPLETED = "COMPLETED",
  ANNOUNCED = "ANNOUNCED",
  UNKNOWN = "UNKNOWN",
  POST_PRODUCTION = "POST_PRODUCTION",
}

enum DetailedMovieType {
  FILM = "FILM",
  VIDEO = "VIDEO",
  TV_SERIES = "TV_SERIES",
  MINI_SERIES = "MINI_SERIES",
  TV_SHOW = "TV_SHOW",
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

export enum MovieSequelsAndPrequelsType {
  SEQUEL = "SEQUEL",
  PREQUEL = "PREQUEL",
  REMAKE = "REMAKE",
  UNKNOWN = "UNKNOWN",
}

export type MovieOptionRatingFrom = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type MovieGenres = {
  genre: string;
}[];

export type MovieCountries = {
  country: string;
}[];

export interface MovieBudget {
  type: string;
  amount: number;
  currencyCode: string;
  name: string;
  symbol: string;
}

export interface SequelAndPrequelMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: MovieSequelsAndPrequelsType;
}

export interface SimilarMovie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: "SIMILAR";
}

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
  ratingKinopoisk: number | null;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  duration?: number;
}

export type DetailedMovie = Omit<Movie, "kinopoiskId" | "type" | "rating" | "ratingVoteCount"> & {
  kinopoiskId: number;
  imdbId: string | null;
  reviewsCount: number | null;
  ratingGoodReview: number | null;
  ratingGoodReviewVoteCount: number | null;
  ratingKinopoisk: number | null;
  ratingKinopoiskVoteCount: number | null;
  ratingFilmCritics: number | null;
  ratingFilmCriticsVoteCount: number | null;
  ratingAwait: number | null;
  ratingAwaitCount: number | null;
  ratingRfCritics: number | null;
  ratingRfCriticsVoteCount: number | null;
  webUrl: string | null;
  slogan: string | null;
  shortDescription: string | null;
  editorAnnotation: string | null;
  isTicketsAvailable: boolean;
  productionStatus: MovieProductionStatus | null;
  type: DetailedMovieType | null;
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
};

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
