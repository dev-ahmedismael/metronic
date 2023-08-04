import Section from "@/components/templates/Section";
import InProgressBtn from "@/components/templates/status_buttons/InProgressBtn";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecSeven = () => {
  return (
    <Section>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} lg={6}>
          <img
            src="/images/featured.jpg"
            alt="featured"
            width="100%"
            height="300px"
            style={{ borderRadius: "4px" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Box display={"flex"} justifyContent={"space-between"} mb={2}>
            <Box>
              <Typography>Featured</Typography>
              <Typography variant="h3">9 Degree</Typography>
            </Box>
            <Box>
              <InProgressBtn>In Progress</InProgressBtn>
            </Box>
          </Box>
          <Box display={"flex"} mb={2}>
            <Box mr={3}>
              <img
                src="/images/avatar/3.jpg"
                alt="robert fox"
                width="40px"
                style={{ borderRadius: "4px" }}
              />
            </Box>
            <Box>
              <Typography>Manager</Typography>
              <Typography>Robert Fox</Typography>
            </Box>
          </Box>
          <Typography mb={2}>
            Flat cartoony illustrations with vivid unblended colors and
            asymmetrical beautiful purple hair lady
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              <Box style={{ border: "1px dashed gray" }} borderRadius={1}>
                <Container>
                  <Typography className="m-0">Feb 6, 2021</Typography>
                  <Typography className="m-0">Due Date</Typography>
                </Container>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box style={{ border: "1px dashed gray" }} borderRadius={1}>
                <Container>
                  <Typography className="m-0">$284,900</Typography>
                  <Typography className="m-0">Budget</Typography>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

export default HomeSecSeven;
