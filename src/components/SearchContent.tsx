import React from "react";
import { Movie } from "../types";
import { MovieSearchResponse } from "../types/responses";
import Pagination from "./Pagination";
import MoviesPageList from "./MoviesPageList";

interface SearchContentProps {
  data: MovieSearchResponse;
  restProps:
    | {
        page: number;
        setPage: React.Dispatch<React.SetStateAction<number>>;
        inWatchList: (movie: Partial<Movie>) => boolean;
        toggleWatchList: (movie: Partial<Movie>) => void;
      }
    | undefined;
}

const SearchContent: React.FC<SearchContentProps> = ({ data, restProps }) => {
  if (!restProps) return null;

  const { page, setPage, inWatchList, toggleWatchList } = restProps;
  const { films, pagesCount } = data;

  return (
    <>
      <MoviesPageList movies={films} inWatchList={inWatchList} toggleWatchList={toggleWatchList} />
      <Pagination pagesCount={pagesCount} currentPage={page} setPage={setPage} />
    </>
  );
};
export default SearchContent;
