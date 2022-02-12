import { Button, Flex } from "@chakra-ui/react";
import React from "react";

interface PaginationProps {
  pagesCount: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, currentPage, setPage }) => {
  const pagesArray: number[] = [];
  const count = Math.min(pagesCount, 20);

  for (let index = 1; index <= count; index++) {
    pagesArray.push(index);
  }

  return (
    <Flex pb={4} justifyContent="center">
      {pagesArray.map((p) => {
        if (pagesArray.length < 6) {
          return (
            <Button mx={1} key={p} disabled={p === currentPage} onClick={() => setPage(p)} variant="solid" size="xs">
              {p}
            </Button>
          );
        }

        if (p === 1) {
          return (
            <Button mx={1} key={p} disabled={p === currentPage} onClick={() => setPage(p)} variant="solid" size="xs">
              {p}
            </Button>
          );
        }

        if (p === count) {
          return (
            <Button mx={1} key={p} disabled={p === currentPage} onClick={() => setPage(p)} variant="solid" size="xs">
              {p}
            </Button>
          );
        }

        if (p >= currentPage - 2 && p <= currentPage + 2) {
          return (
            <Button mx={1} key={p} disabled={p === currentPage} onClick={() => setPage(p)} variant="solid" size="xs">
              {p}
            </Button>
          );
        }

        return null;
      })}
    </Flex>
  );
};
export default Pagination;
