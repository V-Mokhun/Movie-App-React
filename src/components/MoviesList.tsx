import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from "swiper/react";
import { StoreContext } from "../context/storeContext";
import { Movie } from "../types";
import { handleWatchlist, isInWatchList } from "../utils";
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

  const inWatchList = useCallback((movie: Partial<Movie>) => isInWatchList(userStore, movie), [userStore]);

  const toggleWatchList = useCallback((movie: Partial<Movie>) => handleWatchlist(userStore, movie), [userStore]);

  return (
    <Box mb={8}>
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
          <SwiperSlide style={{ height: "auto", maxHeight: 350 }} key={movie.kinopoiskId || movie.filmId}>
            <MovieCard
              isInWatchList={inWatchList(movie)}
              onToggleWatchList={() => toggleWatchList(movie)}
              movie={movie}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </Box>
  );
});
export default MoviesList;
