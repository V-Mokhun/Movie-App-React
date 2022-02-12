import { Flex } from "@chakra-ui/react";
import React from "react";
import { fetchPremiereMovies, fetchReleaseMovies, fetchTopMovies } from "../api/movies";
import PremieresList from "../components/PremieresList";
import ReleasesList from "../components/ReleasesList";
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
        Component={ReleasesList}
        queryParam="releases-movies"
        fetchFunction={() => fetchReleaseMovies(year, month)}
      />
      <WithMovies Component={TopList} queryParam="top-movies" fetchFunction={() => fetchTopMovies(year, month)} />
    </Flex>
  );
};
export default Home;
