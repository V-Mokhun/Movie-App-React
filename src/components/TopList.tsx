import React, { useRef } from "react";
import { useQuery } from "react-query";
import { fetchTopMovies } from "../api/movies";
import { Months } from "../types";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";
import MoviesList from "./MoviesList";

interface TopListProps {
  year: number;
  month: Months;
}

const TopList: React.FC<TopListProps> = ({ year, month }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const { data: topMovies, isError, error, isLoading } = useQuery("top-movies", () => fetchTopMovies(year, month));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>An error occured! {error}</ErrorMessage>;
  }

  return topMovies ? (
    <MoviesList movies={topMovies.films} prevRef={navigationPrevRef} nextRef={navigationNextRef} title="Top" />
  ) : null;
};
export default TopList;
