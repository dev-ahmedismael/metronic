import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const LandingPageNav = () => {
  return (
    <nav>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
      >
        <Image src={"/images/logo.png"} alt="Logo" width={50} height={50} />
      </Box>
    </nav>
  );
};

export default LandingPageNav;
