import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#8B5CF6",
    },
    secondary: {
      main: "#F472B6",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#09090B",
    },
    text: {
      primary: "#D4D4D8",
      secondary: "#F5F3FF",
      disabled: "#A1A1AA",
    },
  },
});
