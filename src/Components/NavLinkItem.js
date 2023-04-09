import React from "react";
import { Tab } from "@mui/material";
const NavLinkItem = ({ ...props }) => {
  return <Tab component="a" onClick={(e) => e.preventDefault()} {...props} />;
};

export default NavLinkItem;
