import Section from "@/components/templates/Section";
import { Avatar, AvatarGroup, Box, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecThree = () => {
  return (
    <section>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} lg={6}>
          <Section>
            <Box height={150}>
              <Typography variant="h6" mb={2}>
                357
              </Typography>
              <Typography mb={2}>Professionals</Typography>
              <Typography>Today's Heroes</Typography>
              <AvatarGroup max={4}>
                <Avatar
                  alt="James Sharp"
                  src="/images/avatar/1.jpg"
                  sx={{ "&:hover": { position: "relative", zIndex: 10 } }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/images/avatar/2.jpg"
                  sx={{ "&:hover": { position: "relative", zIndex: 10 } }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/images/avatar/3.jpg"
                  sx={{ "&:hover": { position: "relative", zIndex: 10 } }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src="/images/avatar/4.jpg"
                  sx={{ "&:hover": { position: "relative", zIndex: 10 } }}
                />
                <Avatar
                  alt="John Walker"
                  src="/images/avatar/5.jpg"
                  sx={{ "&:hover": { position: "relative", zIndex: 10 } }}
                />
              </AvatarGroup>
            </Box>
          </Section>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Section>
            <Box height={150}>
              <Typography variant="h6" mb={2}>
                External Links
              </Typography>
              <Typography mb={1}>Avg. Client Rating</Typography>
              <Typography mb={1}>Instagram Followers</Typography>
              <Typography mb={1}>Google Ads CPC</Typography>
            </Box>
          </Section>
        </Grid>
      </Grid>
    </section>
  );
};

export default HomeSecThree;
