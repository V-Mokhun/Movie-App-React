import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { MOVIES_ROUTE } from "../routes/routes";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Partial<Movie>;
  onToggleWatchList: () => void;
  isInWatchList: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onToggleWatchList, isInWatchList }) => {
  return (
    <Box
      position="relative"
      height="100%"
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
    >
      <Link to={`${MOVIES_ROUTE}${movie.kinopoiskId}`}>
        <Image src={movie.posterUrlPreview} alt={movie.nameEn || movie.nameRu} height="100%" width="100%" />
      </Link>
      <Button
        variant="pink"
        size="lg"
        position="absolute"
        bottom="20px"
        left={15}
        right={15}
        zIndex={1}
        as={Link}
        to={`${MOVIES_ROUTE}${movie.kinopoiskId}`}
      >
        Watch Now
      </Button>
      <IconButton
        zIndex={1}
        position="absolute"
        right={15}
        top={15}
        aria-label={isInWatchList ? "Remove from watch list" : "Add to watch list"}
        icon={isInWatchList ? <DeleteIcon /> : <AddIcon />}
        onClick={onToggleWatchList}
      />
    </Box>
  );
};
export default MovieCard;
