import React from "react";
import SectionFiveChart from "./HomeSecFiveChart";
import CompletedBtn from "@/components/templates/status_buttons/CompletedBtn";
import Section from "@/components/templates/Section";
import { Box, Typography } from "@mui/material";

const HomeSecFive = () => {
  return (
    <Section>
      <Typography variant="h6">Performance Overview</Typography>
      <Typography>Users from all channels</Typography>
      <Box display={"flex"} mt={2}>
        <Typography variant="h4">$</Typography>
        <Typography variant="h3" mx={2}>
          8.55
        </Typography>
        <Box>
          <CompletedBtn>^ 2.2%</CompletedBtn>
        </Box>
      </Box>
      <Typography>Avarage cost per interaction</Typography>
      <SectionFiveChart />
    </Section>
  );
};

export default HomeSecFive;
