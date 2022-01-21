import { extendTheme, ThemeConfig } from "@chakra-ui/react";

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
  ...config,
};

const customTheme = extendTheme(theme);

export default customTheme;
