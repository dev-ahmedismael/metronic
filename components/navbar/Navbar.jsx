"use client";
import React from "react";
import { Box } from "@mui/material";
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
          alignItems={"center"}
          height={"100%"}
        >
          <Image src={"/images/logo.png"} alt="Logo" width={50} height={50} />
        </Box>
      )}
    </nav>
  );
};

export default Navbar;
