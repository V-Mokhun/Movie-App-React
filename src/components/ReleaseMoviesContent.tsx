import React from "react";
import { Movie } from "../types";
import { ReleaseMovieResponse } from "../types/responses";
import MoviesPageList from "./MoviesPageList";
import Pagination from "./Pagination";

interface ReleaseMoviesContentProps {
  data: ReleaseMovieResponse;
  restProps:
    | {
        page: number;
        setPage: React.Dispatch<React.SetStateAction<number>>;
        inWatchList: (movie: Partial<Movie>) => boolean;
        toggleWatchList: (movie: Partial<Movie>) => void;
      }
    | undefined;
}

const ReleaseMoviesContent: React.FC<ReleaseMoviesContentProps> = ({ data, restProps }) => {
  if (!restProps) return null;

  const { page, setPage, inWatchList, toggleWatchList } = restProps;
  const { releases, total } = data;

  return (
    <>
      <MoviesPageList movies={releases} inWatchList={inWatchList} toggleWatchList={toggleWatchList} />
      <Pagination pagesCount={Math.ceil(total / 12)} currentPage={page} setPage={setPage} />
    </>
  );
};
export default ReleaseMoviesContent;
