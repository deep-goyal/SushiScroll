import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "./index.css";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111111",
    },
  },
  fonts: {
    heading: "'Inter Tight', sans-serif",
    body: "'Inter Tight', sans-serif",
  },
  styles: {
    global: {
      "#mainheading": {
        fontFamily: "'Nuku', sans-serif",
      },
    },
  },
});

export default theme;
