import { Grid, Typography } from "@mui/material";
import React from "react";

const General = () => {
  const menuItems = [
    {
      id: 1,
      heading1: "User Profile",
      heading1_list: [
        "Overview",
        "Projects",
        "Campaigns",
        "Documents",
        "Followers",
        "Activity",
      ],
      heading2: "",
      heading2_list: [],
      heading3: "",
      heading3_list: [],
    },
    {
      id: 2,
      heading1: "Corporate",
      heading1_list: ["About", "Our Team", "Contact Us", "Licenses", "Sitemap"],
      heading2: "Careers",
      heading2_list: ["Careers List", "Careers Apply"],
      heading3: "",
      heading3_list: [],
    },
    {
      id: 3,
      heading1: "FAQ",
      heading1_list: ["FAQ Classic", "FAQ Extended"],
      heading2: "Blog",
      heading2_list: ["Blog Home", "Blog Post"],
      heading3: "Pricing",
      heading3_list: ["Column Pricing", "Table Pricing"],
    },
    {
      id: 4,
      heading1: "Social",
      heading1_list: ["Feeds", "Activity", "Followers", "Settings"],
      heading2: "",
      heading2_list: [],
      heading3: "",
      heading3_list: [],
    },
  ];

  return (
    <Grid container maxWidth={900}>
      <Grid item lg={8}>
        <Grid container>
          {menuItems.map((item) => (
            <Grid item lg={3} key={item.id}>
              <Typography variant="h6" sx={{ cursor: "pointer" }}>
                {item.heading1}
              </Typography>
              {item.heading1_list.map((e, index) => (
                <Typography key={index} mb={1}>
                  {e}
                </Typography>
              ))}
              <Typography variant="h6">{item.heading2}</Typography>
              {item?.heading2_list.map((e, index) => (
                <Typography key={index} mb={1}>
                  {e}
                </Typography>
              ))}
              <Typography variant="h6">{item?.heading3}</Typography>
              {item?.heading3_list.map((e, index) => (
                <Typography key={index} mb={1}>
                  {e}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item lg={4}>
        <img
          src="/images/pages_general.jpg"
          alt="General"
          width="100%"
          style={{ borderRadius: "4px" }}
        />
      </Grid>
    </Grid>
  );
};

export default General;
