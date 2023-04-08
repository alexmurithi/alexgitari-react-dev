import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";
import "@fontsource/merienda";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4B4DED",
    },
    secondary: {
      main: "#ED489E",
    },
    background: {
      default: "#F3D9DA",
    },
  },
  typography: {
    fontFamily: "montserrat",
  },
});
export default theme;
