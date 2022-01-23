export enum MovieTypes {
  "FILM" = "Film",
  "TV SHOW" = "TV Show",
  "UNKNOWN" = "Unknown",
}

export interface Movie {
  filmId: number;
  nameRu: string;
  nameEn: string;
  type: MovieTypes;
  year: string | number;
  description: string;
  filmLength: string | number;
  countries: {
    country: string;
  }[];
  genres: {
    genre: string;
  }[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface MovieSearchResponse {
  keyword: string;
  pagesCount: number;
  searchFilmsCountResult: number;
  films: Movie[];
}

export interface detailedMovie extends Movie {
  kinopoiskId: number;
  imdbId: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
}
