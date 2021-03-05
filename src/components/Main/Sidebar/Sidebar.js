import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarSection,
  StyledSidebar,
  SidebarTray,
  SidebarLabel,
  SidebarIcon,
  SidebarItem,
} from "./Sidebar.styles";
import { SidebarData } from "./SidebarData";

const Sidebar = (props) => {
  const [active, setActive] = useState(false);

  return (
    <SidebarContainer>
      <StyledSidebar>
        <SidebarSection id="sidebar-profile"></SidebarSection>
        <SidebarSection id="sidebar-data">
          {/* Map over sidebar data to fill sidebar */}
          {SidebarData.map(({ title, path, icon }, index) => {
            if (title === "Projects") {
              return (
                <SidebarItem key={index} onClick={() => setActive(!active)}>
                  <SidebarIcon>{icon}</SidebarIcon>
                  <SidebarLabel>{title}</SidebarLabel>
                </SidebarItem>
              );
            } else {
              return (
                <SidebarItem key={index}>
                  <SidebarIcon>{icon}</SidebarIcon>
                  <SidebarLabel>{title}</SidebarLabel>
                </SidebarItem>
              );
            }
          })}
        </SidebarSection>
        <SidebarSection id="sidebar-tools"></SidebarSection>
      </StyledSidebar>
      <SidebarTray className={active ? "active" : null} />
    </SidebarContainer>
  );
};

export default Sidebar;
