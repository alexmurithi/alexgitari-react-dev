import React, { useState } from "react";
import { AppBar, Toolbar, Box, Tabs } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Image from "../Components/Image";
import Logo from "../Assets/Images/alexgitari.svg";

import ContainedButton from "../Components/Button/ContainedButton";
import NavLinkItem from "../Components/NavLinkItem";

const Header = () => {
  const theme = useTheme();
  const pages = [
    "Home",
    "About Me",
    "Services",
    "Content",
    "Projects",
    "Skills",
  ];

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <Image src={Logo} width="inherit" alt="Alex Gitari" />

          <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange} centered>
              {pages.map((page) => (
                <NavLinkItem
                  key={page}
                  label={page}
                  href="/"
                  sx={{
                    mx: theme.spacing(2),
                    color: "text.primary",
                    px: theme.spacing(4),
                  }}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ display: "flex", flexGrow: 0 }}>
            <ContainedButton sx={{ width: 179, height: 52 }}>
              Contact Me
            </ContainedButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default Header;
