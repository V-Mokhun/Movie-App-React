import React from "react";
import { Movie } from "../types";
import ErrorMessage from "./ErrorMessage";
import MoviesPageList from "./MoviesPageList";
import Pagination from "./Pagination";

interface MoviesContentProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  inWatchList: (movie: Partial<Movie>) => boolean;
  toggleWatchList: (movie: Partial<Movie>) => void;
  movies: Movie[];
  totalPages: number;
}

const MoviesContent: React.FC<MoviesContentProps> = ({
  page,
  setPage,
  inWatchList,
  toggleWatchList,
  movies,
  totalPages,
}) => {
  return (
    <>
      {movies.length > 0 ? (
        <MoviesPageList movies={movies} inWatchList={inWatchList} toggleWatchList={toggleWatchList} />
      ) : (
        <ErrorMessage>No movies found! Try again</ErrorMessage>
      )}
      <Pagination pagesCount={totalPages} currentPage={page} setPage={setPage} />
    </>
  );
};
export default MoviesContent;
