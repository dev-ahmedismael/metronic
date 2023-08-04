import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const SidebarHeader = ({ isActive }) => {
  return (
    <Box height={75} borderBottom={"1px dashed gray"}>
      <Container>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          height={75}
        >
          {isActive ? (
            <Image
              src={"/images/logo.svg"}
              alt="Logo"
              width={120}
              height={25}
            />
          ) : (
            <Image src={"/images/logo.png"} alt="Logo" width={30} height={25} />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default SidebarHeader;
