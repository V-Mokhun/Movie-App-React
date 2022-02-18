import { useCallback, useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/storeContext";
import { DetailedMovie, Movie } from "../types";
import { handleWatchlist, isInWatchList } from "../utils";

export default function useMoviePage() {
  const { userStore } = useContext(StoreContext);
  const [page, setPage] = useState(1);

  const inWatchList = useCallback(
    (movie: Partial<Movie> | DetailedMovie) => isInWatchList(userStore, movie),
    [userStore]
  );
  const toggleWatchList = useCallback(
    (movie: Partial<Movie> | DetailedMovie) => handleWatchlist(userStore, movie),
    [userStore]
  );

  useEffect(() => {
    if (page !== 1) setPage(1);
  }, [userStore?.searchQuery]);

  return {
    page,
    setPage,
    inWatchList,
    toggleWatchList,
    userStore,
  };
}
