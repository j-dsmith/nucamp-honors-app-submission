import React from "react";
import {
  SidebarContainer,
  StyledSidebar,
  SidebarTray,
  SidebarLabel,
  SidebarIcon,
  SidebarItem,
} from "./Sidebar.styles";
import { SidebarData } from "./SidebarData";

const Sidebar = (props) => {
  return (
    <SidebarContainer>
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
      <SidebarTray className="active" />
    </SidebarContainer>
  );
};

export default Sidebar;
