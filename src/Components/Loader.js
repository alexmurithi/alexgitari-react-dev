import React from "react";
import { Box, CircularProgress } from "@mui/material";
const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        color: "secondary.main",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
