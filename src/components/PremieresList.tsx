import React, { useRef } from "react";
import { useQuery } from "react-query";
import { fetchPremiereMovies } from "../api/movies";
import { Months } from "../types";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import MoviesList from "./MoviesList";

interface PremieresListProps {
  year: number;
  month: Months;
}

const PremieresList: React.FC<PremieresListProps> = ({ year, month }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const {
    data: premiereMovies,
    isError,
    error,
    isLoading,
  } = useQuery("popular-movies", () => fetchPremiereMovies(year, month));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>An error occured! {error}</ErrorMessage>;
  }

  return premiereMovies ? (
    <MoviesList
      movies={premiereMovies.items}
      prevRef={navigationPrevRef}
      nextRef={navigationNextRef}
      title="Premieres"
    />
  ) : null;
};
export default PremieresList;
