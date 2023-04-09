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
        color: "primary.main",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
