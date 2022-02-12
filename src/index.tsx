/* eslint-disable import/no-unresolved */
import "swiper/css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { FirebaseContext } from "./context/firebaseContext";
import { StoreContext } from "./context/storeContext";
import firebase from "./lib/firebase";
import userStore from "./store/UserStore";
import theme from "./theme";
import "./style.css";

const queryClient = new QueryClient();

const ContextProvider: React.FC = ({ children }) => {
  const firebaseValue = useMemo(() => ({ firebase }), []);
  const storeValue = useMemo(() => ({ userStore }), []);

  return (
    <FirebaseContext.Provider value={firebaseValue}>
      <QueryClientProvider client={queryClient}>
        <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
      </QueryClientProvider>
    </FirebaseContext.Provider>
  );
};

render(
  <Router>
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ContextProvider>
    </ChakraProvider>
  </Router>,
  document.getElementById("root")
);

// search page
