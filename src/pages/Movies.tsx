/* eslint-disable no-nested-ternary */
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchMovies, MoviesOptions } from "../api/movies";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import MoviesContent from "../components/MoviesContent";
import MoviesFilter from "../components/MoviesFilter";
import useMoviePage from "../hooks/useMoviePage";

const Movies: React.FC = () => {
  const { page, setPage, inWatchList, toggleWatchList } = useMoviePage();
  const [options, setOptions] = useState<MoviesOptions>({});
  const { data, isError, error, isLoading } = useQuery(
    ["all-movies", page, options.country, options.genre, options.order, options.ratingFrom, options.type],
    () => fetchMovies(options, page)
  );

  return (
    <Box>
      <MoviesFilter setPage={setPage} setOptions={setOptions} />
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <ErrorMessage>An error occured! {error}</ErrorMessage>
      ) : (
        data && (
          <MoviesContent
            movies={data.items}
            totalPages={data.totalPages}
            inWatchList={inWatchList}
            toggleWatchList={toggleWatchList}
            page={page}
            setPage={setPage}
          />
        )
      )}
    </Box>
  );
};

export default Movies;
