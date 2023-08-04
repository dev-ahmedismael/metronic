import { Box, Container } from "@mui/material";
import React from "react";

const Section = ({ children }) => {
  return (
    <section>
      <Box bgcolor={"white"} borderRadius={2} py={3}>
        <Container>{children}</Container>
      </Box>
    </section>
  );
};

export default Section;
