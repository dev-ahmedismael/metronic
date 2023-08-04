import React from "react";
import HomeSecEightChart from "./HomeSecEightChart";
import Section from "@/components/templates/Section";
import { Box, Typography } from "@mui/material";

const HomeSecEight = () => {
  return (
    <Section>
      <Box height={400}>
        <Typography variant="h6">Performance</Typography>
        <Typography>1,046 Inbound Calls today</Typography>
        <HomeSecEightChart />
      </Box>
    </Section>
  );
};

export default HomeSecEight;
