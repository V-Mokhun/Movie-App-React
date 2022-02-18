import { Spinner } from "@chakra-ui/react";
import React from "react";

interface LoadingSpinnerProps {
  size?: "xl" | "xs" | "sm" | "md" | "lg";
  margin?: string;
  style?: React.CSSProperties;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size, margin, style }) => {
  return (
    <Spinner
      color="pink.400"
      size={size || "xl"}
      margin={margin || "50px auto"}
      display="flex"
      justifyContent="center"
      sx={{
        ...style,
      }}
    />
  );
};
export default LoadingSpinner;
