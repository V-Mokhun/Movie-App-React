import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Button } from "./components";

// Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
// eslint-disable-next-line import/no-mutable-exports
const theme = {
  styles: {
    global: {
      "html, body": {
        height: "100%",
      },
    },
  },
  components: {
    Button,
  },
  breakpoints: createBreakpoints({
    sm: "320px",
    md: "479px",
    lg: "768px",
    xl: "991px",
    "2xl": "1260",
  }),
  ...config,
};

const customTheme = extendTheme(theme);

export default customTheme;
