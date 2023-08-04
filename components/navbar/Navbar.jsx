"use client";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";
import { Box, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav>
      {path === "/" ? (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
        >
          <Image src={"/images/logo.png"} alt="Logo" width={50} height={50} />
        </Box>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          height={"100%"}
        >
          <Container>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box
                display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
              >
                <NavbarLinks />
              </Box>
              <Box
                display={{ xs: "flex", sm: "flex", md: "none", lg: "none" }}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <MenuIcon sx={{ color: "lightgray" }} fontSize="large" />
              </Box>
              <Box>
                <NavbarIcons />
              </Box>
            </Box>
          </Container>
        </Box>
      )}
    </nav>
  );
};

export default Navbar;
