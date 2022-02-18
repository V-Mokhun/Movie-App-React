/* eslint-disable no-nested-ternary */
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { DetailedMovie } from "../../types";
import { numberWithSpaces } from "../../utils";
import OneMovieAbout from "./OneMovieAbout";
import OneMovieSequels from "./OneMovieSequels";

interface OneMovieContentProps {
  data: DetailedMovie;
  isInWatchList: boolean;
  onToggleWatchList: () => void;
}

const OneMovieContent: React.FC<OneMovieContentProps> = ({ data, isInWatchList, onToggleWatchList }) => {
  return (
    <Box flex="1 1 auto" minW={0}>
      <Heading mb={2} as="h1" fontSize="5xl" fontWeight={700} color="gray.500">
        {data.nameEn || data.nameRu} ({data.year})
      </Heading>
      {data.shortDescription && (
        <Text fontSize="xl" mb={2}>
          {data.shortDescription}
        </Text>
      )}
      <Flex alignItems="center" justifyContent="space-between" gap={2} fontSize="3xl" mb={5}>
        <Flex alignItems="center" gap={2}>
          {data.ratingKinopoisk && (
            <Text
              fontWeight={700}
              color={data.ratingKinopoisk >= 8 ? "green" : data.ratingKinopoisk >= 5 ? "orange" : "red"}
            >
              {data.ratingKinopoisk}
            </Text>
          )}
          {data.ratingKinopoiskVoteCount && <Text>{numberWithSpaces(data.ratingKinopoiskVoteCount)}</Text>}
        </Flex>
        <Box>
          <IconButton
            aria-label={isInWatchList ? "Remove from watch list" : "Add to watch list"}
            icon={isInWatchList ? <DeleteIcon /> : <AddIcon />}
            onClick={onToggleWatchList}
          />
        </Box>
      </Flex>
      <OneMovieAbout data={data} />
      <OneMovieSequels id={data.kinopoiskId} />
    </Box>
  );
};
export default OneMovieContent;
