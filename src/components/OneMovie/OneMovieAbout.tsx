import { Box, Heading, Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { fetchOneMovieBudget } from "../../api/movies";
import { DetailedMovie } from "../../types";
import { convertMinsToHrsMins, numberWithSpaces } from "../../utils";

interface OneMovieAboutProps {
  data: DetailedMovie;
}

const OneMovieAbout: React.FC<OneMovieAboutProps> = ({ data }) => {
  const { data: budget } = useQuery(["one-movie-budget", data.kinopoiskId], () =>
    fetchOneMovieBudget(data.kinopoiskId)
  );

  return (
    <Box mb={6}>
      <Heading as="h2" fontSize="2xl" fontWeight={700} mb={4}>
        About
      </Heading>
      <Table variant="simple">
        <Tbody>
          {data.year && (
            <Tr>
              <Td py={2} pr={3} pl={0} color="blackAlpha.600" width={160}>
                Year
              </Td>
              <Td py={2} px={3} color="#333">
                {data.year}
              </Td>
            </Tr>
          )}
          {data.countries.length > 0 && (
            <Tr>
              <Td py={2} pr={3} pl={0} color="blackAlpha.600" width={160}>
                Country
              </Td>
              <Td py={2} px={3} color="#333">
                {data.countries.map((country, i, arr) => (
                  <span key={country.country}>{arr.length - 1 !== i ? `${country.country}, ` : country.country}</span>
                ))}
              </Td>
            </Tr>
          )}
          {data.genres.length > 0 && (
            <Tr>
              <Td py={2} pr={3} pl={0} color="blackAlpha.600" width={160}>
                Genre
              </Td>
              <Td py={2} px={3} color="#333">
                {data.genres.map((genre, i, arr) => (
                  <span key={genre.genre}>{arr.length - 1 !== i ? `${genre.genre}, ` : genre.genre}</span>
                ))}
              </Td>
            </Tr>
          )}
          {data.slogan && (
            <Tr>
              <Td py={2} pr={3} pl={0} color="blackAlpha.600" width={160}>
                Slogan
              </Td>
              <Td py={2} px={3} color="#333">
                {data.slogan}
              </Td>
            </Tr>
          )}
          {budget &&
            budget.items.map((budg) => (
              <Tr key={`${budg.name}-${budg.type}`}>
                <Td py={2} pr={3} pl={0} color="blackAlpha.600" width={160}>
                  {`${budg.type.slice(0, 1)}${budg.type.toLowerCase().slice(1)}`}
                </Td>
                <Td py={2} px={3} color="#333">
                  <span>
                    {budg.symbol}
                    {numberWithSpaces(budg.amount)}
                  </span>
                </Td>
              </Tr>
            ))}
          {data.ratingAgeLimits && (
            <Tr>
              <Td py={2} pr={3} pl={0} color="blackAlpha.600" width={160}>
                Age
              </Td>
              <Td py={2} px={3} color="#333">
                <Text
                  fontWeight={700}
                  display="inline-block"
                  px={1}
                  py={0.5}
                  border="1px solid black"
                >{`${data.ratingAgeLimits.replace("age", "")}+`}</Text>
              </Td>
            </Tr>
          )}
          {data.filmLength && (
            <Tr>
              <Td py={2} pr={3} pl={0} color="blackAlpha.600" width={160}>
                Time
              </Td>
              <Td py={2} px={3} color="#333">
                {typeof data.filmLength === "string"
                  ? `${data.filmLength} min`
                  : `${convertMinsToHrsMins(data.filmLength)}`}
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
};
export default OneMovieAbout;
