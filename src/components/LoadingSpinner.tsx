import { Spinner } from "@chakra-ui/react";
import React from "react";

const LoadingSpinner: React.FC = () => {
  return <Spinner color="pink.400" size="xl" margin="50px auto" display="flex" justifyContent="center" />;
};
export default LoadingSpinner;
