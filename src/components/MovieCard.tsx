/* eslint-disable no-nested-ternary */
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Image, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { CSSProperties, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/storeContext";
import { MOVIES_ROUTE } from "../routes/routes";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Partial<Movie>;
  onToggleWatchList: () => void;
  isInWatchList: boolean;
  style?: CSSProperties;
  imageBoxStyle?: CSSProperties;
  noText?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = observer(
  ({ movie, onToggleWatchList, isInWatchList, noText = false, style, imageBoxStyle }) => {
    const { userStore } = useContext(StoreContext);
    let color: string | null = null;
    let rating: string | number | null = null;

    if (movie.rating && movie.rating !== "null") {
      color = movie.rating >= 8 ? "green" : movie.rating >= 5 ? "orange" : "red";
      if (typeof movie.rating === "string") {
        rating = movie.rating.slice(0, 3);
      } else {
        rating = movie.rating.toFixed(1);
      }

      if (typeof movie.rating === "string" && movie.rating.includes("%")) {
        color = null;
        rating = null;
      }
    } else if (movie.ratingKinopoisk) {
      color = movie.ratingKinopoisk >= 8 ? "green" : movie.ratingKinopoisk >= 5 ? "orange" : "red";
      rating = movie.ratingKinopoisk.toFixed(1);
    }

    return (
      <Box display="flex" flexDirection="column" height="100%" sx={{ ...style }}>
        <Box
          mb={1}
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0, 0.3)",
            pointerEvents: "none",
            opacity: 1,
            transition: "opacity .3s linear",
          }}
          _hover={{
            _after: {
              opacity: 0,
            },
          }}
          sx={{ ...imageBoxStyle }}
        >
          <Link to={`${MOVIES_ROUTE}/${movie.kinopoiskId || movie.filmId}`}>
            <Image
              src={movie.posterUrlPreview}
              alt={movie.nameEn || movie.nameRu}
              maxHeight={400}
              height="100%"
              width="100%"
            />
          </Link>
          {userStore && userStore.user && (
            <IconButton
              zIndex={1}
              position="absolute"
              right={15}
              top={15}
              aria-label={isInWatchList ? "Remove from watch list" : "Add to watch list"}
              icon={isInWatchList ? <DeleteIcon /> : <AddIcon />}
              onClick={onToggleWatchList}
            />
          )}

          {(movie.ratingKinopoisk || movie.rating) && (
            <Text
              zIndex={1}
              position="absolute"
              left={15}
              top={15}
              px={1.5}
              py={1}
              color="white"
              backgroundColor={color || undefined}
            >
              {rating}
            </Text>
          )}
        </Box>
        {!noText && (
          <Text maxH={50} overflowY="hidden" mt="auto" fontSize="md">
            {movie.nameEn || movie.nameRu}
          </Text>
        )}
      </Box>
    );
  }
);

export default MovieCard;
