import React from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import MarkUnreadChatAltTwoToneIcon from "@mui/icons-material/MarkUnreadChatAltTwoTone";
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import NavButton from "./NavButton";
import { Box } from "@mui/material";
import AccountMenu from "./AccountMenu";
import Link from "next/link";

const NavbarIcons = () => {
  const navIcons = [
    { id: 1, icon: <SearchTwoToneIcon />, url: "/" },
    { id: 2, icon: <NotificationsActiveTwoToneIcon />, url: "/" },
    { id: 3, icon: <MarkUnreadChatAltTwoToneIcon />, url: "/" },
    { id: 4, icon: <GridViewTwoToneIcon />, url: "/dashboard" },
    ,
    ,
    ,
    ,
  ];
  return (
    <Box display={"flex"}>
      <Box display={"flex"} pt={1}>
        {navIcons.map((navIcon) => (
          <Link href={navIcon.url} key={navIcon.id}>
            <Box>
              <NavButton>{navIcon.icon}</NavButton>
            </Box>
          </Link>
        ))}
      </Box>
      <Box ml={2} pt={1}>
        <AccountMenu />
      </Box>
    </Box>
  );
};

export default NavbarIcons;
