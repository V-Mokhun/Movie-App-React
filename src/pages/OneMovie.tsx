import { Box } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchOneMovie } from "../api/movies";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import OneMovieBottom from "../components/OneMovie/OneMovieBottom";
import OneMovieTop from "../components/OneMovie/OneMovieTop";

const OneMovie: React.FC = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data, isError, isLoading, error } = useQuery(["one-movie", id], () => fetchOneMovie(id!));

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>An error occured! {error}</ErrorMessage>;
  }

  return data ? (
    <Box pb={{ base: 3, lg: 5, xl: 7 }}>
      <OneMovieTop data={data} />
      <OneMovieBottom data={data} />
    </Box>
  ) : null;
};
export default OneMovie;
