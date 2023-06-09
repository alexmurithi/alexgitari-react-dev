import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Link,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Image from "../Components/Image";
import Logo from "../Assets/Images/alexgitari.svg";
import MobileTabletLogo from "../Assets/Images/alexgitarimobile.svg";

import MenuIcon from "@mui/icons-material/Menu";

import ContainedButton from "../Components/Button/ContainedButton";
import NavLinkItem from "../Components/NavLinkItem";

const drawerWidth = 240;

const Header = () => {
  const theme = useTheme();
  const pages = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Me",
      url: "/about",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Content",
      url: "/content",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Skills",
      url: "/skills",
    },
  ];

  const [value, setValue] = useState(0);

  const [mobileTabletOpen, setMobileTabletOpen] = useState(false);

  const handleMobileTabletDrawerToggle = () => {
    setMobileTabletOpen((prevState) => !prevState);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const isMobileTablet = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <AppBar color="white" elevation={1} component="nav" position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
            sx={{ display: { xs: "flex", lg: "none" } }}
            onClick={handleMobileTabletDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" sx={{ display: { xs: "none", lg: "flex" } }}>
            <Image src={Logo} alt="Alex Gitari" />
          </Link>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexGrow: 1,
              ml: 4,
            }}
          >
            <Tabs value={value} onChange={handleChange} centered>
              {pages.map((page, index) => (
                <NavLinkItem
                  key={index}
                  label={page.name}
                  href={`${page.url}`}
                  sx={{
                    mx: theme.spacing(2),
                    color: "text.primary",
                    px: theme.spacing(4),
                  }}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ display: { xs: "flex", lg: "none" }, flexGrow: 1 }}></Box>
          <Box sx={{ display: { xs: "flex", lg: "none" }, flexGrow: 0 }}>
            <Link href="/">
              <Image
                src={MobileTabletLogo}
                alt="Alex Gitari"
                sx={{ maxWidth: 30 }}
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", lg: "flex" }, flexGrow: 0 }}>
            <ContainedButton sx={{ width: 179, height: 52 }}>
              Contact Me
            </ContainedButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          open={mobileTabletOpen}
          onClose={handleMobileTabletDrawerToggle}
          variant="temporary"
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ paddingY: 1, paddingX: 2 }}>
            <Link href="/">
              <Image src={Logo} alt="Alex Gitari" sx={{ maxWidth: 100 }} />
            </Link>
          </Box>

          <Divider />
          <List>
            {pages.map((page, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component="a" href={`${page.url}`}>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <Toolbar />
    </>
  );
};
export default React.memo(Header);
