import React, { useEffect } from "react";
import { connect } from "react-redux";
import { showTray } from "../../redux/ActionCreators";
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

const mapStateToProps = (state) => ({
  active: state.active,
  showProjects: state.showProjects,
  showNotes: state.showNotes,
});

const mapDispatchToProps = {
  showTray: (viewData) => showTray(viewData),
};

const Sidebar = (props) => {
  const { showTray, showProjects, showNotes, active } = props;
  console.log(props);

  const handleProjectsClick = () => {
    if (!showProjects) {
      showTray({
        active: true,
        showProjects: true,
        showNotes: false,
      });
    }
  };

  const closeTray = () => {
    showTray({
      active: false,
      showProjects: false,
      showNotes: false,
    });
  };

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
      <SidebarTray />
    </SidebarContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
