import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import { Movie } from "../types";
import ErrorMessage from "./ErrorMessage";
import MovieCard from "./MovieCard";

interface MoviesPageListProps {
  movies: Partial<Movie>[];
  inWatchList: (movie: Partial<Movie>) => boolean;
  toggleWatchList: (movie: Partial<Movie>) => void;
}

const MoviesPageList: React.FC<MoviesPageListProps> = observer(({ movies, inWatchList, toggleWatchList }) => {
  return (
    <Flex pb={4} flexWrap="wrap" gap={3}>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.filmId || movie.kinopoiskId}
            movie={movie}
            isInWatchList={inWatchList(movie)}
            onToggleWatchList={() => toggleWatchList(movie)}
            style={{
              flex: {
                base: "1 1 100%",
                md: "0 1 calc(50% - 10px)",
                lg: "0 1 calc(50% - 10px)",
                xl: "0 1 calc(33.333% - 10px)",
                "2xl": "0 1 calc(25% - 10px)",
              },
              height: "auto",
            }}
          />
        ))
      ) : (
        <ErrorMessage>No movies found! Please try again</ErrorMessage>
      )}
    </Flex>
  );
});
export default MoviesPageList;
