import CompletedBtn from "@/components/templates/status_buttons/CompletedBtn";
import React from "react";
import HomeSecTwoChart from "./HomeSecTwoChart";
import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import Section from "@/components/templates/Section";
import PinkSection from "@/components/templates/PinkSection";

const activeProjects = 72;
const pending = 43;

const HomeSecTwo = () => {
  const data = [
    { name: "Leaf CRM", value: 400, cost: 7660 },
    { name: "Mivy App", value: 300, cost: 2820 },
    { name: "Others", value: 300, cost: 45.257 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];
  return (
    <section>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <PinkSection>
            <Box
              style={{
                color: "white",
              }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Box mb={8}>
                <Typography variant="h4">69</Typography>
                <Typography variant="h5">Active Projects</Typography>
              </Box>
              <Box>
                <Box display={"flex"} justifyContent={"space-between"} mb={2}>
                  <Box>{pending} Pending</Box>
                  <Box>{activeProjects}%</Box>
                </Box>
                <LinearProgress
                  variant="determinate"
                  color={"error"}
                  value={activeProjects}
                />
              </Box>
            </Box>
          </PinkSection>
        </Grid>
        <Grid item xs={12} md={6}>
          <Section>
            <Box display={"flex"}>
              <Typography variant="h4" mr={2}>
                $ 69,700
              </Typography>
              <CompletedBtn>^ 2.2%</CompletedBtn>
            </Box>
            <Typography>Projects Earnings in April</Typography>
            <Box display={"flex"}>
              <Box>
                <HomeSecTwoChart />
              </Box>
              <Box width={"100%"} mt={3} ml={2}>
                {data.map((e, index) => (
                  <Box
                    key={index}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Box display={"flex"}>
                      <Box
                        mr={2}
                        mt={1}
                        sx={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "100%",
                          backgroundColor: `${COLORS[index]}`,
                        }}
                      ></Box>
                      <Box>{e.name}</Box>
                    </Box>
                    <Box>{`$${e.cost}`}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Section>
        </Grid>
      </Grid>
    </section>
  );
};

export default HomeSecTwo;
