import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
  const items = [
    "Home",
    "About Me",
    "Services",
    "Content",
    "Projects",
    "Skills",
  ];
  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>kk</Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default Header;
