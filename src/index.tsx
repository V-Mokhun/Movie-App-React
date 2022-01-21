import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { render } from "react-dom";
import App from "./App";
import theme from "./theme";
import firebase from "./lib/firebase";
import { FirebaseContext } from "./context/firebaseContext";

const ContextProvider: React.FC = ({ children }) => {
  const firebaseValue = useMemo(() => ({ firebase }), []);

  return <FirebaseContext.Provider value={firebaseValue}>{children}</FirebaseContext.Provider>;
};

render(
  <ChakraProvider>
    <ContextProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ContextProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
