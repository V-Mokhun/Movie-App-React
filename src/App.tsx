import { Flex } from "@chakra-ui/react";
import React from "react";
import AppRouter from "./AppRouter";

const App: React.FC = () => {
  return (
    <Flex py={4} flexDirection="column" height="100%">
      <AppRouter />
    </Flex>
  );
};

export default App;
