import React from "react";
import styles from "../../styles/navbar.module.css";
import { Box } from "@mui/material";

const NavButton = ({ children }) => {
  return (
    <Box className={styles.button} p={2}>
      {children}
    </Box>
  );
};

export default NavButton;
