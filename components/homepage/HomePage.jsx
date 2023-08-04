"use client";
import React from "react";
import HomeSecOne from "./section-1/HomeSecOne";
import HomeSecTwo from "./section-2/HomeSecTwo";
import HomeSecThree from "./section-3/HomeSecThree";
import HomeSecFour from "./section-4/HomeSecFour";
import HomeSecFive from "./section-5/HomeSecFive";
import HomeSecSeven from "./section-7/HomeSecSeven";
import HomeSecEight from "./section-8/HomeSecEight";
import { Box, Container, Grid } from "@mui/material";
import { useAuth } from "@/custom-hooks/useAuth";

const HomePage = () => {
  useAuth();

  return (
    <Container>
      <Grid container spacing={5} py={5}>
        <Grid item xs={12}>
          <HomeSecOne />
        </Grid>
        <Grid item xs={12}>
          <HomeSecTwo />
        </Grid>
        <Grid item xs={12}>
          <HomeSecThree />
        </Grid>
        <Grid item xs={12}>
          <HomeSecFour />
        </Grid>
        <Grid item xs={12}>
          <HomeSecFive />
        </Grid>
        <Grid item xs={12}>
          <HomeSecSeven />
        </Grid>
        <Grid item xs={12}>
          <HomeSecEight />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
