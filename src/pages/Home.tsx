import { Heading, Spinner, Stack } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { fetchPremiereMovies } from "../api/movies";
import PremieresList from "../components/PremieresList";
import { Months } from "../types";

interface HomeProps {}

const date = new Date();
const year = date.getFullYear();
const month = date.toLocaleString("eng", { month: "long" }).toUpperCase() as Months;

const Home: React.FC<HomeProps> = () => {
  const {
    data: premiereMovies,
    isError,
    error,
    isLoading,
  } = useQuery("popular-movies", () => fetchPremiereMovies(year, month));

  if (isLoading) {
    return <Spinner color="pink.400" size="xl" margin="0 auto" display="flex" justifyContent="center" />;
  }

  if (isError) {
    return (
      <Heading color="red.400" as="h2" fontSize="2xl">
        An error occured! {error}
      </Heading>
    );
  }

  return <Stack>{premiereMovies && <PremieresList movies={premiereMovies.items} />}</Stack>;
};
export default Home;
