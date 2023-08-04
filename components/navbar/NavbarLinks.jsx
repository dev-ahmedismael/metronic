import React from "react";
import styles from "../../styles/navbar.module.css";
import DashboardsSubMenu from "./navbar_menus/DashboardsMenu";
import PagesSubMenu from "./navbar_menus/PagesMenu";
import HelpSubMenu from "./navbar_menus/HelpMenu";
import AppsSubMenu from "./navbar_menus/AppsMenu";
import LayoutsSubMenu from "./navbar_menus/LayoutsMenu";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import { Box, Typography } from "@mui/material";

const NavbarLinks = () => {
  const navLinks = [
    { id: 1, title: "Dashboards", menu: <DashboardsSubMenu /> },
    { id: 2, title: "Pages", menu: <PagesSubMenu /> },
    { id: 3, title: "Apps", menu: <AppsSubMenu /> },
    { id: 4, title: "Layouts", menu: <LayoutsSubMenu /> },
    { id: 5, title: "Help", menu: <HelpSubMenu /> },
  ];

  return (
    <Box display={"flex"}>
      {navLinks.map((navLink) => (
        <Box
          key={navLink.id}
          className={`${styles.navlink}`}
          mr={3}
          height={"100%"}
          pt={1}
        >
          <NavButton>
            <Typography>{navLink.title}</Typography>
          </NavButton>
          <NavMenu>{navLink.menu}</NavMenu>
        </Box>
      ))}
    </Box>
  );
};

export default NavbarLinks;
