import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { DetailedMovie } from "../../types";
import OneMovieSimilars from "./OneMovieSimilars";

interface OneMovieBottomProps {
  data: DetailedMovie;
}

const OneMovieBottom: React.FC<OneMovieBottomProps> = ({ data }) => {
  return (
    <Box>
      {data.description && (
        <Text fontSize="lg" mb={5}>
          {data.description}
        </Text>
      )}
      <OneMovieSimilars id={data.kinopoiskId} />
    </Box>
  );
};
export default OneMovieBottom;
