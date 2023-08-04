import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ isActive }) => {
  return (
    <aside id="main_sidebar">
      <SidebarHeader isActive={isActive} />
      <SidebarBody isActive={isActive} />
      <SidebarFooter isActive={isActive} />
    </aside>
  );
};

export default Sidebar;
