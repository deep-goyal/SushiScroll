import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#000000" : "#FFFFFF", // Darker background for dark mode
        color: props.colorMode === "dark" ? "#F7FAFC" : "#1A202C", // Lighter text color for dark mode
      },
    }),
  },
  colors: {
    brand: {
      50: "#f5f5f5",
      100: "#e0e0e0",
      200: "#b3b3b3",
      300: "#808080",
      400: "#4d4d4d",
      500: "#333333", // Use this as the default dark background
      600: "#2c2c2c",
      700: "#262626",
      800: "#1f1f1f",
      900: "#181818", // Use this as the darkest background
    },
  },
});

export default theme;
