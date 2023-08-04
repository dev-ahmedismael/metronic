"use client";
import React, { useState } from "react";
import { FaRocket } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { RiBankCardFill } from "react-icons/ri";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import NavMenu from "../NavMenu";

const AppsMenu = () => {
  const menuItems = [
    {
      id: 1,
      icon: <FaRocket />,
      title: "Projects",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 2,
      icon: <BsCartFill />,
      title: "eCommerce",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 3,
      icon: <BiSupport />,
      title: "Support Center",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 4,
      icon: <FaUserCheck />,
      title: "User Management",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 5,
      icon: <RiContactsBookFill />,
      title: "Contacts",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 6,
      icon: <BsFillBasket3Fill />,
      title: "Subscriptions",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 7,
      icon: <FaShoppingBag />,
      title: "Customers",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 8,
      icon: <RiBankCardFill />,
      title: "Invoice Management",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 9,
      icon: <BsFileEarmarkCheckFill />,
      title: "File Manager",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 10,
      icon: <IoMdMail />,
      title: "Inbox",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 11,
      icon: <BsFillChatLeftTextFill />,
      title: "Chat",
      secondMenu: [
        "My Projects",
        "View Projects",
        "Targets",
        "Budget",
        "Users",
        "Files",
        "Activity",
        "Settings",
      ],
    },
    {
      id: 12,
      icon: <BsFillCalendarDateFill />,
      title: "Calendar",
      secondMenu: [],
    },
  ];

  const [isMenuItemHovered, setIsMenuItemHovered] = useState(false);
  const [MenuItemId, setMenuItemId] = useState(null);

  const showSecondMenu = (id) => {
    setIsMenuItemHovered(true);
    setMenuItemId(id);
  };
  const hideSecondMenu = () => {
    setIsMenuItemHovered(false);
  };

  return (
    <Box p={2}>
      {menuItems.map((item) => (
        <Box
          key={item.id}
          display={"flex"}
          justifyContent={"space-between"}
          mb={2}
          position={"relative"}
          onMouseOver={() => {
            showSecondMenu(item.id);
          }}
          onMouseLeave={hideSecondMenu}
          sx={{ cursor: "default" }}
        >
          <Box display={"flex"}>
            <Box mr={2}>{item?.icon}</Box>
            <Typography>{item.title}</Typography>
          </Box>
          <Box ml={2}>
            {item.secondMenu.length !== 0 && <MdOutlineKeyboardArrowRight />}
          </Box>
          {isMenuItemHovered &&
            MenuItemId === item.id &&
            item.secondMenu.length > 0 && (
              <Box
                display={"flex"}
                flexDirection={"column"}
                borderRadius={2}
                boxShadow={3}
                py={2}
                px={5}
                position={"absolute"}
                top={-10}
                right={-180}
                zIndex={10}
                bgcolor={"white"}
              >
                {item.secondMenu.map((e, index) => (
                  <Typography key={index} mb={1}>
                    {e}
                  </Typography>
                ))}
              </Box>
            )}
        </Box>
      ))}
    </Box>
  );
};

export default AppsMenu;
