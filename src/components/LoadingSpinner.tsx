import { Spinner } from "@chakra-ui/react";
import React from "react";

interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ ...props }) => {
  return <Spinner color="pink.400" size="xl" margin="50px auto" display="flex" justifyContent="center" {...props} />;
};
export default LoadingSpinner;
