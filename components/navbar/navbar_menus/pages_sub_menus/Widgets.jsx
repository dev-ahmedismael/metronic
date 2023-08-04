import { Grid, Typography } from "@mui/material";
import React from "react";

const Widgets = () => {
  const menuItems = [
    "Lists",
    "Statistics",
    "Charts",
    "Mixed",
    "Tables",
    "Feeds",
  ];
  return (
    <Grid container>
      <Grid item lg={6}>
        {menuItems.map((item, index) => (
          <Typography mb={1} key={index}>
            {item}
          </Typography>
        ))}
      </Grid>
      <Grid item lg={6}>
        <img
          src="/images/pages_widgets.jpg"
          alt="Widgets"
          width="100%"
          style={{ borderRadius: "4px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Widgets;
