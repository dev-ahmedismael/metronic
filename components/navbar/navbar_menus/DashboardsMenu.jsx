import React from "react";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import PixTwoToneIcon from "@mui/icons-material/PixTwoTone";
import LeaderboardTwoToneIcon from "@mui/icons-material/LeaderboardTwoTone";
import SupportTwoToneIcon from "@mui/icons-material/SupportTwoTone";
import CardGiftcardTwoToneIcon from "@mui/icons-material/CardGiftcardTwoTone";
import SchoolTwoToneIcon from "@mui/icons-material/SchoolTwoTone";
import JoinFullTwoToneIcon from "@mui/icons-material/JoinFullTwoTone";
import HeadsetMicTwoToneIcon from "@mui/icons-material/HeadsetMicTwoTone";
import styles from "../../../styles/navbar.module.css";
import { Box, Button, Grid, Typography } from "@mui/material";

const DashboardsMenu = () => {
  const menuGrid = [
    {
      id: 1,
      list: [
        {
          id: 1,
          title: "Default",
          subtitle: "Reports & Statistics",
          icon: <GridViewTwoToneIcon />,
          color: "blue",
        },
        {
          id: 2,
          title: "Projects",
          subtitle: "Tasts, graphs & charts",
          icon: <PixTwoToneIcon />,
          color: "purple",
        },
        {
          id: 3,
          title: "Marketing",
          subtitle: "Campaigns & Conversions",
          icon: <LeaderboardTwoToneIcon />,
          color: "black",
        },
        {
          id: 4,
          title: "POS System",
          subtitle: "Campaigns & Conversions",
          icon: <SupportTwoToneIcon />,
          color: "red",
        },
      ],
    },
    {
      id: 2,
      list: [
        {
          id: 1,
          title: "eCommerce",
          subtitle: "Sales reports",
          icon: <CardGiftcardTwoToneIcon />,
          color: "red",
        },
        {
          id: 2,
          title: "Online Courses",
          subtitle: "Student progress",
          icon: <SchoolTwoToneIcon />,
          color: "green",
        },
        {
          id: 3,
          title: "Bidding",
          subtitle: "Campaigns & Conversions",
          icon: <JoinFullTwoToneIcon />,
          color: "orange",
        },
        {
          id: 4,
          title: "Call Center",
          subtitle: "Campaigns & Conversions",
          icon: <HeadsetMicTwoToneIcon />,
          color: "blue",
        },
      ],
    },
  ];
  const menuList = {
    heading: "More Dashboards",
    list: [
      "Logistics",
      "Website Analytics",
      "Finance Performance",
      "Store Analytics",
      "Social",
      "Delivery",
      "Crypto",
      "School",
      "Podcast",
    ],
  };
  return (
    <Grid container minWidth={"max-content"}>
      <Grid item lg={8}>
        <Grid container p={2}>
          {menuGrid.map((e) => (
            <Grid item lg={6} key={e.id}>
              {e.list.map((e, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  className={styles.dashboardItem}
                  mb={2}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F9F9F9",
                      color: `${e.color}`,
                    }}
                    p={2}
                    mr={2}
                  >
                    {e.icon}
                  </Box>
                  <Box>
                    <Typography>{e.title}</Typography>
                    <Typography sx={{ fontSize: "small", color: "gray" }}>
                      {e.subtitle}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{ borderTop: "1px dashed lightgray" }}
          display={"flex"}
          justifyContent={"space-between"}
          p={2}
        >
          <Box>
            <Typography>Landing Page Template</Typography>
            <Typography sx={{ fontSize: "small", color: "gray" }}>
              Onpe page landing template with pricing & others
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" color="info">
              Explore
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        lg={4}
        p={2}
        sx={{
          bgcolor: "#F9F9F9",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <Typography variant="h6" mb={2}>
          {menuList.heading}
        </Typography>
        {menuList.list.map((item, index) => (
          <Typography key={index} mb={1} className={styles.dashboardListItem}>
            {item}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default DashboardsMenu;
