/* eslint-disable no-nested-ternary */
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image, Link, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { MOVIES_ROUTE } from "../routes/routes";
import { WatchlistMovie } from "../store/UserStore";
import { convertMinsToHrsMins } from "../utils";

interface WatchListItemProps {
  movie: WatchlistMovie;
  onMovieRemove: () => void;
}

const WatchListItem: React.FC<WatchListItemProps> = ({ movie, onMovieRemove }) => {
  const [isLargerThan479] = useMediaQuery(`(min-width: 479px)`);

  return (
    <Flex gap={3} key={movie.kinopoiskId || movie.filmId} direction={isLargerThan479 ? "row" : "column"}>
      <ReactRouterLink
        to={`${MOVIES_ROUTE}/${movie.kinopoiskId || movie.filmId}`}
        style={{ flex: `${isLargerThan479 ? "0 0 150px" : "0 1 auto"}` }}
      >
        <Image src={movie.posterUrlPreview} alt={movie.nameEn || movie.nameRu} maxH={{ base: 300, md: 200 }} w="100%" />
      </ReactRouterLink>
      <Box flex="1 1 auto">
        <Flex gap={2} alignItems="center" justifyContent="space-between">
          <Link
            as={ReactRouterLink}
            to={`${MOVIES_ROUTE}/${movie.kinopoiskId || movie.filmId}`}
            fontSize="xl"
            fontWeight={700}
          >
            {movie.nameEn || movie.nameRu}
          </Link>
          {movie.ratingKinopoisk && <Text fontSize="lg">{movie.ratingKinopoisk}</Text>}
        </Flex>
        <Text color="gray.500" mb={2}>
          ({movie.year}){" "}
          {movie.filmLength
            ? typeof movie.filmLength === "number"
              ? convertMinsToHrsMins(movie.filmLength)
              : `${movie.filmLength}`
            : null}
          {movie.duration && convertMinsToHrsMins(movie.duration)}
        </Text>
        <Flex
          alignItems={isLargerThan479 ? "center" : "flex-start"}
          justifyContent="space-between"
          gap={2}
          flexWrap="wrap"
          direction={isLargerThan479 ? "row" : "column"}
        >
          <Box>
            {movie.countries && movie.countries.length > 0 && (
              <Flex mb={0.5} alignItems="center" gap={1} color="gray.500">
                {movie.countries.map((country, i, arr) => (
                  <Text key={country.country} as="span">
                    {arr.length - 1 !== i ? `${country.country}, ` : country.country}
                  </Text>
                ))}
              </Flex>
            )}
            {movie.genres && movie.genres.length > 0 && (
              <Flex mb={1} alignItems="center" gap={1} color="gray.500">
                (
                {movie.genres.map((genre, i, arr) => (
                  <Text key={genre.genre} as="span">
                    {arr.length - 1 !== i ? `${genre.genre}, ` : genre.genre}
                  </Text>
                ))}
                )
              </Flex>
            )}
          </Box>
          <Box>
            <IconButton aria-label="Remove from watch list" icon={<DeleteIcon />} onClick={onMovieRemove} />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default WatchListItem;
