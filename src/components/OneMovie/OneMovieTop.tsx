import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import useMoviePage from "../../hooks/useMoviePage";
import { DetailedMovie } from "../../types";
import OneMovieContent from "./OneMovieContent";
import OneMovieImage from "./OneMovieImage";

interface OneMovieTopProps {
  data: DetailedMovie;
}

const OneMovieTop: React.FC<OneMovieTopProps> = observer(({ data }) => {
  const { inWatchList, toggleWatchList } = useMoviePage();

  return (
    <Flex gap={6} pb={4} mb={4} borderBottom="1px solid #dedede66">
      <OneMovieImage src={data.posterUrlPreview} title={data.nameEn || data.nameRu} />
      <OneMovieContent isInWatchList={inWatchList(data)} onToggleWatchList={() => toggleWatchList(data)} data={data} />
    </Flex>
  );
});

export default OneMovieTop;
