import React from "react";
import { Button } from "@mui/material";

const ContainedButton = ({ children, ...rest }) => {
  return (
    <Button variant="contained" {...rest}>
      {children}
    </Button>
  );
};

export default ContainedButton;
