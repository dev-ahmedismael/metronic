import React from "react";
import RocketLaunchTwoToneIcon from "@mui/icons-material/RocketLaunchTwoTone"; // Components
import LayersTwoToneIcon from "@mui/icons-material/LayersTwoTone"; // Documentation
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone"; // Changelog
import { Box } from "@mui/material";

const HelpMenu = () => {
  const data = require("@/public/data/categories.json");
  const menuItems = data.find((e) => e.category === "Help");
  const Icons = [
    <RocketLaunchTwoToneIcon />,
    <LayersTwoToneIcon />,
    <IntegrationInstructionsTwoToneIcon />,
  ];
  return (
    <Box pt={2} px={2}>
      {menuItems.content.map((item, index) => (
        <Box key={item.id} display={"flex"} mb={2}>
          <Box mr={2}>{Icons[index]}</Box>
          <Box>{item.title}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default HelpMenu;
