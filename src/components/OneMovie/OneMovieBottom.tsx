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
        <Text fontSize={{ base: "md", lg: "lg" }} mb={{ base: 3, md: 4, lg: 5 }}>
          {data.description}
        </Text>
      )}
      <OneMovieSimilars id={data.kinopoiskId} />
    </Box>
  );
};
export default OneMovieBottom;
