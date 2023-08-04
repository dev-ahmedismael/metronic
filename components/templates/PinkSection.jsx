import { Box, Container } from "@mui/material";
import React from "react";

const PinkSection = ({ children }) => {
  return (
    <Box bgcolor={"#F1416C"} borderRadius={2} py={3}>
      <Container>{children}</Container>
    </Box>
  );
};

export default PinkSection;
