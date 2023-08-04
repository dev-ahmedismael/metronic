import React from "react";
import styles from "@/styles/status_btns.module.css";
import { Box } from "@mui/material";

const CompletedBtn = ({ children }) => {
  return (
    <Box className={styles.completed} borderRadius={1} p={1}>
      {children}
    </Box>
  );
};

export default CompletedBtn;
