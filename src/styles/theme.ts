import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "600": "#47585B",
      "info": "#DADADA"
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "#ffffff",
        color: "gray.600",
      },
    },
  },
});
