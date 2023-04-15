import React from "react";
import { Box } from "@mui/material";
const Image = ({ src, alt, ...rest }) => {
  return (
    <Box
      src={src}
      alt={alt}
      {...rest}
      component="img"
      width="100%"
      height="auto"
    />
  );
};

export default Image;
