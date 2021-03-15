import React, { useState } from "react";
import { connect } from "react-redux";
import {
  SidebarContainer,
  SidebarSection,
  StyledSidebar,
  SidebarLabel,
  SidebarIcon,
  SidebarItem,
} from "./Sidebar.styles";
import SidebarTray from "./SidebarTray";
import { SidebarData } from "./SidebarData";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Sidebar = (props) => {
  const [trayActive, setTrayActive] = useState(false);

  const handleProjectsClick = () => {
    setTrayActive(!trayActive);
  };

  const closeTray = () => {};

  return (
    <SidebarContainer>
      <StyledSidebar>
        <SidebarSection id="sidebar-profile"></SidebarSection>
        <SidebarSection id="sidebar-data">
          {/* Map over sidebar data to fill sidebar */}
          {SidebarData.map(({ title, path, icon }, index) => {
            if (title === "Projects") {
              return (
                //this needs to rerender after dispatch
                <SidebarItem key={index} onClick={() => handleProjectsClick()}>
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
        <SidebarSection id="sidebar-tools">
          {" "}
          <button onClick={() => closeTray()}>test</button>
        </SidebarSection>
      </StyledSidebar>
      <SidebarTray trayActive={trayActive} />
    </SidebarContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
