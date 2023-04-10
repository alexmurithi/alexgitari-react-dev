import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/Default";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
