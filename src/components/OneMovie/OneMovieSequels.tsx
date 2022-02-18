import React, { useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { fetchOneMovieSequelsAndPrequels } from "../../api/movies";
import LoadingSpinner from "../LoadingSpinner";
import MoviesList from "../MoviesList";

interface OneMovieSequelsProps {
  id: number;
}

const OneMovieSequels: React.FC<OneMovieSequelsProps> = ({ id }) => {
  const { data, isLoading, refetch } = useQuery(["one-movie-sequels", id], () => fetchOneMovieSequelsAndPrequels(id), {
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

  return data ? (
    <MoviesList
      movies={data}
      nextRef={navigationNextRef}
      prevRef={navigationPrevRef}
      title="Sequels and Prequels"
      slideStyles={{
        maxHeight: 250,
      }}
      cardImageStyles={{ height: "100%" }}
      listStyles={{ marginBottom: 0 }}
    />
  ) : null;
};
export default OneMovieSequels;
