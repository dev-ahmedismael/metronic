"use client";
import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const openSidebar = () => {
    setIsSidebarActive(true);
  };
  const closeSidebar = () => {
    setIsSidebarActive(false);
  };
  return (
    <aside
      id="main_sidebar"
      onMouseOver={openSidebar}
      onMouseOut={closeSidebar}
    >
      <SidebarHeader isActive={isSidebarActive} />
      <SidebarBody isActive={isSidebarActive} />
      <SidebarFooter isActive={isSidebarActive} />
    </aside>
  );
};

export default Sidebar;
