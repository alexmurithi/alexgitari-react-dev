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
    fontSize: 16,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        opacity: 1.0,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
export default theme;
