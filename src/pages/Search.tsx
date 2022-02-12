import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React from "react";
import { fetchMovieBySearchQuery } from "../api/movies";
import SearchContent from "../components/SearchContent";
import WithMovies from "../components/WithMovies";
import useMoviePage from "../hooks/useMoviePage";

const Search: React.FC = observer(() => {
  const { userStore, page, setPage, inWatchList, toggleWatchList } = useMoviePage();

  return userStore ? (
    <Box>
      <WithMovies
        Component={SearchContent}
        restProps={{
          page,
          setPage,
          inWatchList,
          toggleWatchList,
        }}
        queryParam="searched-movies"
        queryDependencies={[userStore?.searchQuery, page]}
        fetchFunction={() => fetchMovieBySearchQuery(userStore.searchQuery, page)}
      />
    </Box>
  ) : null;
});

export default Search;
