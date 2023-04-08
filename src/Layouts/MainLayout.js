import React from "react";
import Header from "../Containers/Header";
import { Container } from "@mui/material";
const MainLayout = ({ children }) => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <main>{children}</main>
      </Container>
    </>
  );
};
export default MainLayout;
