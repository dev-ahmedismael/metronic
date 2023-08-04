import { Grid, Typography } from "@mui/material";
import React from "react";

const menuItems = [
  {
    id: 1,
    heading1: "Corporate Layout",
    heading1_list: [
      "Sign-In",
      "Sign-Up",
      "Two-Factor",
      "Reset Password",
      "New Password",
    ],
    heading2: "Overlay Layout",
    heading2_list: [
      "Sign-In",
      "Sign-Up",
      "Two-Factor",
      "Reset Password",
      "New Password",
    ],
  },
  {
    id: 2,
    heading1: "Creative Layout",
    heading1_list: [
      "Sign-in",
      "Sign-up",
      "Two-Factor",
      "Reset Password",
      "New Password",
    ],
    heading2: "Fancy Layout",
    heading2_list: [
      "Sign-In",
      "Sign-Up",
      "Two-Factor",
      "Reset Password",
      "New Password",
    ],
  },
  {
    id: 3,
    heading1: "General",
    heading1_list: [
      "Multi-Steps Sign-Up",
      "Welcome Message",
      "Verify Email",
      "Coming Soon",
      "Password Confirmation",
      "Account Deactivation",
      "Error 404",
      "Error 500",
    ],
    heading2: "",
    heading2_list: [],
  },
  {
    id: 4,
    heading1: "Email Templates",
    heading1_list: [
      "Welcome Message",
      "Reset Password",
      "Subscription Confirmed",
      "Credit Card Declined",
      "Promo 1",
      "Promo 2",
      "Promo 3",
    ],
    heading2: "",
    heading2_list: [],
  },
];

const Authentication = () => {
  return (
    <Grid container spacing={2}>
      {menuItems.map((item) => (
        <Grid item lg={3} key={item.id}>
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
  );
};

export default Authentication;
