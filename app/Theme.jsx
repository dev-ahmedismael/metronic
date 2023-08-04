"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const Theme = ({ children }) => {
  const theme = createTheme({
    palette: {},
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
