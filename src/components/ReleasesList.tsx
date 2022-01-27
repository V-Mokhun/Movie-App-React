import React, { useRef } from "react";
import { useQuery } from "react-query";
import { fetchReleaseMovies } from "../api/movies";
import { Months } from "../types";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import MoviesList from "./MoviesList";

interface ReleasesListProps {
  year: number;
  month: Months;
}

const ReleasesList: React.FC<ReleasesListProps> = ({ year, month }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const {
    data: releaseMovies,
    isError,
    error,
    isLoading,
  } = useQuery("releases-movies", () => fetchReleaseMovies(year, month));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>An error occured! {error}</ErrorMessage>;
  }

  return releaseMovies ? (
    <MoviesList
      movies={releaseMovies.releases}
      prevRef={navigationPrevRef}
      nextRef={navigationNextRef}
      title="Releases"
    />
  ) : null;
};
export default ReleasesList;
