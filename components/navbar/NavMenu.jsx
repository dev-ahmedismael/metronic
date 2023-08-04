import React from "react";
import styles from "@/styles/navbar.module.css";
import { Box } from "@mui/material";
const NavMenu = ({ children }) => {
  return (
    <Box
      borderRadius={2}
      boxShadow={3}
      className={styles.navlinkMenu}
      sx={{ cursor: "default" }}
    >
      {children}
    </Box>
  );
};

export default NavMenu;
