import { createTheme } from "@mui/material/styles";
import "@fontsource/montserrat";
import "@fontsource/merienda";

const theme = createTheme({
  palette: {
    white: {
      main: "#FFFFFF",
    },
    primary: {
      main: "#4B4DED",
    },
    secondary: {
      main: "#ED489E",
    },
    background: {
      default: "#ffffff",
    },
    peach: {
      main: "#F3D9DA",
    },
  },
  typography: {
    fontFamily: "montserrat",
    fontSize: 16,
    h1: {
      fontSize: 64,
    },
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 14,
    },
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
          fontWeight: "bold",
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          fontSize: 16,
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
