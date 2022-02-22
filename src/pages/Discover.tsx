import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  AWAIT_MOVIES_ROUTE,
  BEST_MOVIES_ROUTE,
  MOVIES_ROUTE,
  POPULAR_MOVIES_ROUTE,
  PREMIERE_MOVIES_ROUTE,
  RELEASE_MOVIES_ROUTE,
} from "../routes/routes";

const DISCOVER_ITEMS = [
  {
    route: MOVIES_ROUTE,
    text: "Movies",
  },
  {
    route: BEST_MOVIES_ROUTE,
    text: "Best movies",
  },
  {
    route: POPULAR_MOVIES_ROUTE,
    text: "Popular movies",
  },
  {
    route: PREMIERE_MOVIES_ROUTE,
    text: "Premiere movies",
  },
  {
    route: RELEASE_MOVIES_ROUTE,
    text: "Release movies",
  },
  {
    route: AWAIT_MOVIES_ROUTE,
    text: "Awaited movies",
  },
];

const Discover: React.FC = () => {
  return (
    <Box>
      <Heading as="h1" fontSize="5xl" mb={5}>
        Discover
      </Heading>
      <Stack spacing={4}>
        {DISCOVER_ITEMS.map((item) => (
          <Box key={item.text}>
            <Link
              p={2}
              display="block"
              fontSize="2xl"
              color="gray.500"
              transition="color 0.3s linear"
              _hover={{
                color: "#ED64A6",
              }}
              to={item.route}
              as={ReactRouterLink}
            >
              {item.text}
            </Link>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
export default Discover;
