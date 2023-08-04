import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Box
          display={{ xs: "none", sm: "flex" }}
          justifyContent={"space-between"}
          p={3}
        >
          <Box>
            <Typography>2023 © Metronic</Typography>
          </Box>
          <Box display={"flex"}>
            <Link href="#">
              <Typography mr={2}>About</Typography>
            </Link>
            <Link href="#">
              <Typography mr={2}>Support</Typography>
            </Link>
            <Link href="#">
              <Typography>Purchase</Typography>
            </Link>
          </Box>
        </Box>
        <Box display={{ xs: "block", sm: "none" }} p={3}>
          <Typography textAlign={"center"}>2023 © Metronic</Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
