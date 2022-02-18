import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { fetchOneMovieSimilars } from "../../api/movies";
import LoadingSpinner from "../LoadingSpinner";
import MoviesList from "../MoviesList";

interface OneMovieSimilarsProps {
  id: number;
}

const OneMovieSimilars: React.FC<OneMovieSimilarsProps> = ({ id }) => {
  const { data, isLoading, refetch } = useQuery(["one-movie-similars", id], () => fetchOneMovieSimilars(id), {
    enabled: false,
  });
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <LoadingSpinner size="md" margin="20px auto" />;
  }

  return data && data.items.length > 0 ? (
    <MoviesList
      movies={data.items}
      nextRef={navigationNextRef}
      prevRef={navigationPrevRef}
      title={`Similar (${data.total})`}
      cardImageStyles={{ height: "100%" }}
    />
  ) : null;
};

export default OneMovieSimilars;
