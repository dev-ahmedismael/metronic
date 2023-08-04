"use client";
import React, { useState } from "react";
import General from "./pages_sub_menus/General";
import Account from "./pages_sub_menus/Account";
import Authentication from "./pages_sub_menus/Authentication";
import Utilities from "./pages_sub_menus/Utilities";
import Widgets from "./pages_sub_menus/Widgets";
import { Box, Typography } from "@mui/material";

const PagesMenu = () => {
  const menuItems = [
    { id: 1, title: "General", content: <General /> },
    { id: 2, title: "Account", content: <Account /> },
    { id: 3, title: "Authentication", content: <Authentication /> },
    { id: 4, title: "Utilities", content: <Utilities /> },
    { id: 5, title: "Widgets", content: <Widgets /> },
  ];

  const [activeTab, setActiveTab] = useState(menuItems[0].content);
  const changeActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };
  return (
    <Box p={2}>
      <Box display={"flex"} mb={2} style={{ borderBottom: "1px solid gray" }}>
        {menuItems.map((item) => (
          <Typography
            mr={3}
            mb={2}
            key={item.id}
            onClick={() => {
              changeActiveTab(item.content);
            }}
          >
            {item.title}
          </Typography>
        ))}
      </Box>
      <div>{activeTab}</div>
    </Box>
  );
};

export default PagesMenu;
