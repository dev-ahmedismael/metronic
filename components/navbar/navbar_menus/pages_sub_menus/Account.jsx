import { Grid, Typography } from "@mui/material";
import React from "react";

const Account = () => {
  const menuItems = [
    ["Overview", "Settings", "Security", "Activity", "Billing"],
    ["Statements", "Referrals", "API Keys", "Logs"],
  ];
  return (
    <Grid container maxWidth={"700px"}>
      <Grid item lg={6}>
        <Grid container>
          {menuItems.map((item, index) => (
            <Grid item lg={6} key={index}>
              {item.map((e, index) => (
                <Typography key={index} mb={1}>
                  {e}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item lg={6}>
        <img
          src="/images/pages_account.jpg"
          alt="Account"
          width="100%"
          style={{ borderRadius: "4px" }}
        />
      </Grid>
    </Grid>
  );
};

export default Account;
