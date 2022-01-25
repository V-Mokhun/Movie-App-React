import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { fetchMovieBySearchQuery } from "../api/movies";
import { StoreContext } from "../context/storeContext";
import { Movie } from "../types";

interface SearchProps {}

const Search: React.FC<SearchProps> = observer(() => {
  const { userStore } = useContext(StoreContext);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { data, error, isError, isLoading } = useQuery(["searched-movies", userStore?.searchQuery], () =>
    fetchMovieBySearchQuery(userStore?.searchQuery!)
  );

  return <div>Search</div>;
});
export default Search;
