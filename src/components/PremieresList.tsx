import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useCallback, useContext, useRef } from "react";
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from "swiper/react";
import { StoreContext } from "../context/storeContext";
import { PremiereMovie } from "../types";
import MovieCard from "./MovieCard";
import Slider from "./Slider";

interface PremieresListProps {
  movies: PremiereMovie[];
}

const PremieresList: React.FC<PremieresListProps> = observer(({ movies }) => {
  const { userStore } = useContext(StoreContext);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handleWatchlist = useCallback(
    (movie: PremiereMovie) => {
      if (userStore) {
        if (userStore.isMovieInWatchList(movie.kinopoiskId)) {
          userStore.removeFromWatchList(movie.kinopoiskId);
        } else {
          userStore.addToWatchList(movie);
        }
      }
    },
    [userStore]
  );

  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between" mb={5}>
        <Heading as="h3" fontSize="2xl" color="gray.500">
          Premieres
        </Heading>
        <Flex alignItems="center">
          <IconButton mr={3} ref={navigationPrevRef} aria-label="Previous slide" icon={<ArrowLeftIcon />} />
          <IconButton ref={navigationNextRef} aria-label="Next slide" icon={<ArrowRightIcon />} />
        </Flex>
      </Flex>
      <Slider prevRef={navigationPrevRef} nextRef={navigationNextRef}>
        {movies.map((movie) => (
          <SwiperSlide style={{ height: "auto", maxHeight: 350 }} key={movie.kinopoiskId}>
            <MovieCard
              isInWatchList={userStore!.isMovieInWatchList(movie.kinopoiskId)}
              onToggleWatchList={() => handleWatchlist(movie)}
              movie={movie}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </Box>
  );
});
export default PremieresList;
