import { Heading } from "@chakra-ui/react";
import React from "react";

interface ErrorMessageProps {}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, ...props }) => {
  return (
    <Heading color="red.400" as="h2" fontSize="2xl" {...props}>
      {children}
    </Heading>
  );
};
export default ErrorMessage;
