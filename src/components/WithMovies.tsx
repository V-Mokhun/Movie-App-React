import React, { ReactElement } from "react";
import { useQuery } from "react-query";
import ErrorMessage from "./ErrorMessage";
import LoadingSpinner from "./LoadingSpinner";

interface WithMoviesProps<T, P> {
  fetchFunction(): Promise<T>;
  queryParam: string;
  queryDependencies?: unknown[];
  restProps?: P;
  Component: React.ComponentType<{ data: T; restProps: P | undefined }>;
}

const WithMovies = <T, P extends Record<string, unknown>>({
  Component,
  fetchFunction,
  queryParam,
  queryDependencies = [],
  restProps,
}: WithMoviesProps<T, P>): ReactElement | null => {
  const { data, isError, error, isLoading } = useQuery([queryParam, ...queryDependencies], () => fetchFunction());

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage>An error occured! {error}</ErrorMessage>;
  }

  return data ? <Component restProps={restProps} data={data} /> : null;
};
export default WithMovies;
