import { Grid, Typography } from "@mui/material";
import React from "react";

const Utilities = () => {
  const menuItems = [
    {
      id: 1,
      heading1: "General Modals",
      heading1_list: [
        "Invite Friends",
        "View Users",
        "Select Users",
        "Upgrade Plan",
        "Share & Earn",
        "New Target",
        "New Card",
        "New Address",
        "Create API Key",
        "Bidding",
      ],
      heading2: "",
      heading2_list: [],
    },
    {
      id: 2,
      heading1: "Advanced Modals",
      heading1_list: [
        "Create App",
        "Create Campaign",
        "Create Business Acc",
        "Create Project",
        "Top Up Wallet",
        "Offer a Deal",
        "Two Factor Auth",
      ],
      heading2: "Search",
      heading2_list: ["Horizontal", "Vertical", "Users", "Select Location"],
    },
    {
      id: 3,
      heading1: "Wizard",
      heading1_list: [
        "Horizontal",
        "Vertical",
        "Two Factor Auth",
        "Create App",
        "Create Campaign",
        "Create Account",
        "Create Project",
        "Top Up Wallet",
        "Offer a Deal",
      ],
      heading2: "",
      heading2_list: [],
    },
  ];
  return (
    <Grid container>
      <Grid item lg={7}>
        <Grid container>
          {menuItems.map((item) => (
            <Grid item lg={4} key={item.id}>
              <Typography variant="h6">{item.heading1}</Typography>
              {item.heading1_list.map((e, index) => (
                <Typography key={index} mb={1}>
                  {e}
                </Typography>
              ))}
              <Typography variant="h6">{item.heading2}</Typography>
              {item.heading2_list.map((e, index) => (
                <Typography key={index} mb={1}>
                  {e}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item lg={5}>
        <img
          src="/images/pages_utilities.jpg"
          alt="Utilities"
          width="300px"
          style={{ borderRadius: "4px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Utilities;
