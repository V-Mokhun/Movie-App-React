import { Box } from "@chakra-ui/react";
import React from "react";
import { fetchTopMovies } from "../api/movies";
import TopMoviesContent from "../components/TopMoviesContent";
import WithMovies from "../components/WithMovies";
import useMoviePage from "../hooks/useMoviePage";

const BestMovies: React.FC = () => {
  const { page, setPage, inWatchList, toggleWatchList } = useMoviePage();

  return (
    <Box>
      <WithMovies
        Component={TopMoviesContent}
        restProps={{
          page,
          setPage,
          inWatchList,
          toggleWatchList,
        }}
        queryParam="best-movies"
        queryDependencies={[page]}
        fetchFunction={() => fetchTopMovies(page)}
      />
    </Box>
  );
};

export default BestMovies;
