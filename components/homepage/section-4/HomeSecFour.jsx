import React from "react";
import DarkButton from "@/components/templates/DarkButton";
import Section from "@/components/templates/Section";
import { Box, Typography } from "@mui/material";

const HomeSecFour = () => {
  return (
    <Section>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h3" textAlign={"center"}>
          Try our all new Enviroment with <br />{" "}
          <span style={{ color: "crimson" }}>Pro Plan</span> for Free
        </Typography>
        <Box className="my-4">
          <DarkButton>Upgrade Now</DarkButton>
        </Box>
        <Box>
          <img src="/images/upgrade.svg" alt="Upgrade" />
        </Box>
      </Box>
    </Section>
  );
};

export default HomeSecFour;
