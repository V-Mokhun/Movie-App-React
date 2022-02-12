import { Flex } from "@chakra-ui/react";
import React from "react";
import { fetchPremiereMovies, fetchReleaseMovies, fetchTopMovies } from "../api/movies";
import PremieresList from "../components/PremieresList";
import ReleaseList from "../components/ReleaseList";
import TopList from "../components/TopList";
import WithMovies from "../components/WithMovies";
import { month, year } from "../utils";

const Home: React.FC = () => {
  return (
    <Flex flexDirection="column">
      <WithMovies
        Component={PremieresList}
        queryParam="premiere-movies"
        fetchFunction={() => fetchPremiereMovies(year, month)}
      />
      <WithMovies
        Component={ReleaseList}
        queryParam="release-movies"
        fetchFunction={() => fetchReleaseMovies(year, month)}
      />
      <WithMovies Component={TopList} queryParam="best-movies" fetchFunction={() => fetchTopMovies()} />
    </Flex>
  );
};
export default Home;
