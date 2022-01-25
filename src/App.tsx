import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
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
      <Flex height="100%">
        <Box sx={{ flex: "0 0 270px", height: "100%" }}>
          <Sidebar />
        </Box>
        <Box sx={{ flex: "1 1 auto", height: "100%", minWidth: 0 }}>
          <Header />
          <Box sx={{ flex: "1 1 auto" }}>
            <Container maxW="container.xl">
              <AppRouter />
            </Container>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default App;
