import { Box, Flex, Select } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { fetchMoviesFilters, MoviesOptions } from "../api/movies";
import { MovieOptionOrder, MovieOptionType, MovieOptionRatingFrom } from "../types";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

interface MoviesFilterProps {
  setOptions: React.Dispatch<React.SetStateAction<MoviesOptions>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

// fetch genres and countries from api

// genres select
// country select
// order select
// type select
// rating from select

const MoviesFilter: React.FC<MoviesFilterProps> = ({ setOptions, setPage }) => {
  const { data, isLoading, isError, error } = useQuery("movies-filter", () => fetchMoviesFilters());
  const ratingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>An error occured! {error}</ErrorMessage>;
  }

  return (
    <Flex flexWrap="wrap" alignItems="center" gap={2} mb={5}>
      <Box>
        <Select
          onChange={({ target }) => {
            setOptions((options) => ({ ...options, order: target.value as MovieOptionOrder }));
            setPage(1);
          }}
          variant="outline"
          placeholder="Order"
        >
          <option value={MovieOptionOrder.RATING}>Rating</option>
          <option value={MovieOptionOrder.NUM_VOTE}>Votes number</option>
          <option value={MovieOptionOrder.YEAR}>Year</option>
        </Select>
      </Box>
      <Box>
        <Select
          onChange={({ target }) => {
            setOptions((options) => ({ ...options, type: target.value as MovieOptionType }));
            setPage(1);
          }}
          variant="outline"
          placeholder="Type"
        >
          <option value={MovieOptionType.ALL}>All</option>
          <option value={MovieOptionType.FILM}>Film</option>
          <option value={MovieOptionType.TV_SHOW}>TV Show</option>
        </Select>
      </Box>
      <Box>
        <Select
          onChange={({ target }) => {
            setOptions((options) => ({ ...options, ratingFrom: +target.value as MovieOptionRatingFrom }));
            setPage(1);
          }}
          variant="outline"
          placeholder="Min rating"
        >
          {ratingArray.map((rate) => (
            <option key={rate} value={rate}>
              {rate}
            </option>
          ))}
        </Select>
      </Box>
      {data && data.genres && (
        <Box>
          <Select
            onChange={({ target }) => {
              setOptions((options) => ({ ...options, genre: +target.value }));
              setPage(1);
            }}
            variant="outline"
            placeholder="Genre"
          >
            {data.genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.genre}
              </option>
            ))}
          </Select>
        </Box>
      )}
      {data && data.countries && (
        <Box>
          <Select
            onChange={({ target }) => {
              setOptions((options) => ({ ...options, country: +target.value }));
              setPage(1);
            }}
            variant="outline"
            placeholder="Country"
          >
            {data.countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.country}
              </option>
            ))}
          </Select>
        </Box>
      )}
    </Flex>
  );
};
export default MoviesFilter;
