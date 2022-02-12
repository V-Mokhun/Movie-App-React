import React from "react";
import { Movie } from "../types";
import { PremiereMovieResponse } from "../types/responses";
import MoviesPageList from "./MoviesPageList";

interface PremiereMoviesContentProps {
  data: PremiereMovieResponse;
  restProps:
    | {
        inWatchList: (movie: Partial<Movie>) => boolean;
        toggleWatchList: (movie: Partial<Movie>) => void;
      }
    | undefined;
}

const PremiereMoviesContent: React.FC<PremiereMoviesContentProps> = ({ data, restProps }) => {
  if (!restProps) return null;

  const { inWatchList, toggleWatchList } = restProps;
  const { items } = data;

  return <MoviesPageList movies={items} inWatchList={inWatchList} toggleWatchList={toggleWatchList} />;
};
export default PremiereMoviesContent;
