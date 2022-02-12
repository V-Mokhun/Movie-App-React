import React, { useRef } from "react";
import { TopMovieResponse } from "../types/responses";
import MoviesList from "./MoviesList";

interface TopListProps {
  data: TopMovieResponse;
}

const TopList: React.FC<TopListProps> = ({ data }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { films } = data;

  return <MoviesList movies={films} prevRef={navigationPrevRef} nextRef={navigationNextRef} title="Top" />;
};
export default TopList;
