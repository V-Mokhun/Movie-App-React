import { Box, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchMovieBySearchQuery } from "../api/movies";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { StoreContext } from "../context/storeContext";
import { Movie } from "../types";
import { handleWatchlist, isInWatchList } from "../utils";

interface SearchProps {}

const Search: React.FC<SearchProps> = observer(() => {
  const { userStore } = useContext(StoreContext);
  const [page, setPage] = useState(1);
  const {
    data: searchedMovies,
    error,
    isError,
    isLoading,
  } = useQuery(["searched-movies", userStore?.searchQuery, page], () =>
    fetchMovieBySearchQuery(userStore?.searchQuery!, page)
  );

  const inWatchList = useCallback((movie: Movie) => isInWatchList(userStore, movie), [userStore]);

  const toggleWatchList = useCallback((movie: Movie) => handleWatchlist(userStore, movie), [userStore]);

  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [userStore?.searchQuery]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>An error occured! {error}</ErrorMessage>;
  }

  return searchedMovies ? (
    <Box>
      <Flex mb={4} flexWrap="wrap" gap={3}>
        {searchedMovies.films.length > 0 ? (
          searchedMovies.films.map((movie) => (
            <MovieCard
              key={movie.filmId || movie.kinopoiskId}
              movie={movie}
              isInWatchList={inWatchList(movie)}
              onToggleWatchList={() => toggleWatchList(movie)}
              style={{
                flex: "0 1 calc(25% - 10px)",
                height: "auto",
              }}
            />
          ))
        ) : (
          <ErrorMessage>No movies found! Please try again</ErrorMessage>
        )}
      </Flex>
      <Pagination pagesCount={searchedMovies.pagesCount} currentPage={page} setPage={setPage} />
    </Box>
  ) : null;
});
export default Search;
