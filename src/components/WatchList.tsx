import { Stack, StackDivider } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import { WatchlistMovie } from "../store/UserStore";
import WatchListItem from "./WatchListItem";

interface WatchListProps {
  movies: WatchlistMovie[];
  onRemove: (id: number) => void | undefined;
}

const WatchList: React.FC<WatchListProps> = observer(({ movies, onRemove }) => {
  return (
    <Stack spacing={4} divider={<StackDivider />}>
      {movies.map((movie) => (
        <WatchListItem
          key={movie.kinopoiskId || movie.filmId}
          movie={movie}
          onMovieRemove={() => {
            if (movie.filmId) {
              onRemove(movie.filmId);
            } else if (movie.kinopoiskId) {
              onRemove(movie.kinopoiskId);
            }
          }}
        />
      ))}
    </Stack>
  );
});

export default WatchList;
