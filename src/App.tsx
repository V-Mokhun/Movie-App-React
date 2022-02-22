import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { StoreContext } from "./context/storeContext";

const App: React.FC = () => {
  const { userStore } = useContext(StoreContext);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (userStore) {
      if (localStorage.getItem("search-query")) {
        userStore.setSearchQuery(localStorage.getItem("search-query") || "");
      }

      if (localStorage.getItem("user")) {
        userStore.setUser(JSON.parse(localStorage.getItem("user") || "null"));
        userStore.setIsAuth(true);
      }

      if (localStorage.getItem("watch-list")) {
        userStore.setWatchList(JSON.parse(localStorage.getItem("watch-list") || "[]"));
      }
    }
  }, []);

  return (
    <Flex flexDirection="column" height="100%">
      <Flex height="100%" overflow="auto">
        <Box
          className="sidebar__wrapper"
          pt={4}
          flex={{ base: "0 1 60%", md: "0 1 40%", xl: "0 0 270px" }}
          minW={{ base: "60%", md: "40%", xl: 0 }}
          height="100%"
          top={{ base: menuActive ? 0 : "-100%", xl: 0 }}
          zIndex={15}
          background="#fff"
          position={{ base: "absolute", xl: "sticky" }}
          left={0}
          transition="top 0.3s linear"
          onClick={() => (menuActive ? setMenuActive(false) : null)}
        >
          <Sidebar />
        </Box>
        <Box sx={{ flex: "1 1 auto", height: "100%", minWidth: 0 }}>
          <Header setMenuActive={setMenuActive} menuActive={menuActive} />
          <Box pt={3} sx={{ flex: "1 1 auto" }}>
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
