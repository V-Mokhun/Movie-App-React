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
  const { inWatchList, toggleWatchList, userStore } = useMoviePage();

  return (
    <Flex
      gap={{ base: 2, md: 4, lg: 6 }}
      pb={{ base: 2, lg: 4 }}
      mb={{ base: 2, lg: 4 }}
      borderBottom="1px solid #dedede66"
      direction={{ base: "column", lg: "row" }}
    >
      <OneMovieImage src={data.posterUrlPreview} title={data.nameEn || data.nameRu} />
      <OneMovieContent
        userStore={userStore}
        isInWatchList={inWatchList(data)}
        onToggleWatchList={() => toggleWatchList(data)}
        data={data}
      />
    </Flex>
  );
});

export default OneMovieTop;
