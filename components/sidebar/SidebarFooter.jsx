import { Box, Typography } from "@mui/material";
import React from "react";
import InsertDriveFileTwoToneIcon from "@mui/icons-material/InsertDriveFileTwoTone";

const SidebarFooter = ({ isActive }) => {
  return (
    <Box
      height={75}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box bgcolor={"gray"} borderRadius={1} p={1}>
        {isActive ? (
          <Typography px={2} color={"whitesmoke"}>
            Docs & Components
          </Typography>
        ) : (
          <InsertDriveFileTwoToneIcon />
        )}
      </Box>
    </Box>
  );
};

export default SidebarFooter;
