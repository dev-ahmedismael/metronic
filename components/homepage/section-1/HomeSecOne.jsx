import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeSecOne = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Typography>Multipurpose</Typography>
          <Typography>Home - Dashboards</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Box mr={2}>
            <Button variant="contained" color="secondary">
              Rollover
            </Button>
          </Box>
          <Box>
            <Link href={"dashboard/create-new-user"}>
              <Button variant="contained" color="info">
                <Typography color={"white"}> Create New User</Typography>
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeSecOne;
