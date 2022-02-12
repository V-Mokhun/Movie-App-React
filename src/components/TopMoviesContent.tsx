import React from "react";
import { Movie } from "../types";
import { TopMovieResponse } from "../types/responses";
import MoviesPageList from "./MoviesPageList";
import Pagination from "./Pagination";

interface TopMoviesContentProps {
  data: TopMovieResponse;
  restProps:
    | {
        page: number;
        setPage: React.Dispatch<React.SetStateAction<number>>;
        inWatchList: (movie: Partial<Movie>) => boolean;
        toggleWatchList: (movie: Partial<Movie>) => void;
      }
    | undefined;
}

const TopMoviesContent: React.FC<TopMoviesContentProps> = ({ data, restProps }) => {
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
export default TopMoviesContent;
