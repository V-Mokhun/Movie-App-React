import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import { fetchPremiereMovies } from "../api/movies";
import PremiereMoviesContent from "../components/PremiereMoviesContent";
import WithMovies from "../components/WithMovies";
import useMoviePage from "../hooks/useMoviePage";
import { month, year } from "../utils";

const PremiereMovies: React.FC = observer(() => {
  const { inWatchList, toggleWatchList } = useMoviePage();

  return (
    <Box>
      <WithMovies
        Component={PremiereMoviesContent}
        restProps={{
          inWatchList,
          toggleWatchList,
        }}
        fetchFunction={() => fetchPremiereMovies(year, month)}
        queryParam="premiere-movies"
      />
    </Box>
  );
});

export default PremiereMovies;
