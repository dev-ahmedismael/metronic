import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const LayoutsMenu = () => {
  const menuItems = [
    {
      id: 1,
      heading: "Layouts",
      list: ["Light Sidebar", "Dark Sidebar", "Light Header", "Dark Header"],
    },
    {
      id: 2,
      heading: "Toolbars",
      list: ["Classic", "SaaS", "Accounting", "Extended", "Reports"],
    },
  ];
  return (
    <Grid container p={2} maxWidth={"800px"}>
      <Grid item lg={6} pr={2}>
        <Grid container sx={{ borderBottom: "1px dotted gray" }}>
          {menuItems.map((item) => (
            <Grid item lg={6} key={item.id}>
              <Typography variant="h5" mb={3}>
                {item.heading}
              </Typography>
              <ul>
                {item.list.map((element, index) => (
                  <Box key={index} mb={1}>
                    <li>{element}</li>
                  </Box>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box display={"flex"} justifyContent={"space-between"} pt={2}>
          <Box>
            <Typography variant="h6">Layout Builder</Typography>
            <Typography>Customize, preview and export</Typography>
          </Box>
          <Box>
            <Button variant="contained" color="info">
              Try Builder
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={6}>
        <img
          src="/images/layouts_submenu.jpg"
          alt="Layouts"
          width="100%"
          style={{ borderRadius: "4px" }}
        />
      </Grid>
    </Grid>
  );
};

export default LayoutsMenu;
