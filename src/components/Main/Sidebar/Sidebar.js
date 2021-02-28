import React from "react";
import {
  StyledSidebar,
  SidebarLabel,
  SidebarIcon,
  SidebarItem,
} from "./Sidebar.styles";
import { SidebarData } from "./SidebarData";

const Sidebar = (props) => {
  return (
    <StyledSidebar>
      {/* Map over sidebar data to fill sidebar */}
      {SidebarData.map(({ title, path, icon }, index) => {
        return (
          <SidebarItem key={index}>
            <SidebarIcon>{icon}</SidebarIcon>
            <SidebarLabel>{title}</SidebarLabel>
          </SidebarItem>
        );
      })}
    </StyledSidebar>
  );
};

export default Sidebar;
