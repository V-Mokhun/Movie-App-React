import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from "swiper/react";
import { StoreContext } from "../context/storeContext";
import { Movie } from "../types";
import MovieCard from "./MovieCard";
import Slider from "./Slider";

interface MoviesListProps {
  movies: Partial<Movie>[];
  prevRef: React.MutableRefObject<null>;
  nextRef: React.MutableRefObject<null>;
  title: string;
}

const MoviesList: React.FC<MoviesListProps> = observer(({ movies, prevRef, nextRef, title }) => {
  const { userStore } = useContext(StoreContext);

  const isInWatchList = useCallback(
    (movie: Partial<Movie>) => {
      if (userStore) {
        if (movie.kinopoiskId) {
          return userStore.isMovieInWatchList(movie.kinopoiskId);
        }
        if (movie.filmId) {
          return userStore.isMovieInWatchList(movie.filmId);
        }
      }

      return false;
    },
    [userStore]
  );

  const handleWatchlist = useCallback(
    (movie: Partial<Movie>) => {
      if (userStore) {
        if (movie.kinopoiskId) {
          if (userStore.isMovieInWatchList(movie.kinopoiskId)) {
            userStore.removeFromWatchList(movie.kinopoiskId);
          } else {
            userStore.addToWatchList(movie);
          }
        } else if (movie.filmId) {
          if (userStore.isMovieInWatchList(movie.filmId)) {
            userStore.removeFromWatchList(movie.filmId);
          } else {
            userStore.addToWatchList(movie);
          }
        }
      }
    },
    [userStore]
  );

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb={5}>
        <Heading as="h3" fontSize="2xl" color="gray.500">
          {title}
        </Heading>
        <Flex alignItems="center">
          <IconButton mr={3} ref={prevRef} aria-label="Previous slide" icon={<ArrowLeftIcon />} />
          <IconButton ref={nextRef} aria-label="Next slide" icon={<ArrowRightIcon />} />
        </Flex>
      </Flex>
      <Slider prevRef={prevRef} nextRef={nextRef}>
        {movies.map((movie) => (
          <SwiperSlide style={{ height: "auto", maxHeight: 350 }} key={movie.kinopoiskId}>
            <MovieCard
              isInWatchList={isInWatchList(movie)}
              onToggleWatchList={() => handleWatchlist(movie)}
              movie={movie}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </Box>
  );
});
export default MoviesList;
