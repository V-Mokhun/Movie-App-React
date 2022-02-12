import React, { useRef } from "react";
import { ReleaseMovieResponse } from "../types/responses";
import MoviesList from "./MoviesList";

interface ReleasesListProps {
  data: ReleaseMovieResponse;
}

const ReleasesList: React.FC<ReleasesListProps> = ({ data }) => {
  const { releases } = data;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return <MoviesList movies={releases} prevRef={navigationPrevRef} nextRef={navigationNextRef} title="Releases" />;
};
export default ReleasesList;
