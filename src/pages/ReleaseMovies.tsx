import { Box } from "@chakra-ui/react";
import React from "react";
import { fetchReleaseMovies } from "../api/movies";
import ReleaseMoviesContent from "../components/ReleaseMoviesContent";
import WithMovies from "../components/WithMovies";
import useMoviePage from "../hooks/useMoviePage";
import { month, year } from "../utils";

const ReleaseMovies: React.FC = () => {
  const { userStore, page, setPage, inWatchList, toggleWatchList } = useMoviePage();

  return userStore ? (
    <Box>
      <WithMovies
        Component={ReleaseMoviesContent}
        restProps={{
          page,
          setPage,
          inWatchList,
          toggleWatchList,
        }}
        queryParam="release-movies"
        queryDependencies={[page]}
        fetchFunction={() => fetchReleaseMovies(year, month, page)}
      />
    </Box>
  ) : null;
};

export default ReleaseMovies;
