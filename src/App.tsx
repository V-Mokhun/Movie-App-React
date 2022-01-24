import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import AppRouter from "./AppRouter";
import { StoreContext } from "./context/storeContext";

const App: React.FC = () => {
  const { userStore } = useContext(StoreContext);

  useEffect(() => {
    if (userStore) {
      if (localStorage.getItem("search-query")) {
        userStore.setSearchQuery(localStorage.getItem("search-query") || "");
      }

      if (localStorage.getItem("user")) {
        userStore.setUser(JSON.parse(localStorage.getItem("user") || "null"));
        userStore.setIsAuth(true);
      }
    }
  }, []);

  return (
    <Flex pt={4} flexDirection="column" height="100%">
      <AppRouter />
    </Flex>
  );
};

export default App;
