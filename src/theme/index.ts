import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Button } from "./components";

// Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
// eslint-disable-next-line import/no-mutable-exports
let theme = extendTheme({ config });

theme = extendTheme({
  components: {
    Button,
  },
});

export default theme;
