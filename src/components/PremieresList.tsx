import React, { useRef } from "react";
import { PremiereMovieResponse } from "../types/responses";
import MoviesList from "./MoviesList";

interface PremieresListProps {
  data: PremiereMovieResponse;
}

const PremieresList: React.FC<PremieresListProps> = ({ data }) => {
  const { items } = data;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return <MoviesList movies={items} prevRef={navigationPrevRef} nextRef={navigationNextRef} title="Premieres" />;
};
export default PremieresList;
