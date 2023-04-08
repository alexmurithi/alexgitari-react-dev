import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Themes/Default";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
