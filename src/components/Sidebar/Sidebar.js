import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  SidebarContainer,
  SidebarSection,
  StyledSidebar,
  SidebarLabel,
  SidebarIcon,
  SidebarItem,
} from "./Sidebar.styles";
import SidebarTray from "./SidebarTrays/SidebarTray";
import { SidebarData } from "./SidebarData";

// const mapStateToProps = (state) => ({
//   noteSelected: state.noteSelected,
// });

const mapDispatchToProps = {};

class Sidebar extends Component {
  state = {
    trayActive: false,
    projectsActive: true,
    notesActive: false,
  };

  setNotesActive = () => {
    this.setState({
      trayActive: true,
      projectsActive: false,
      notesActive: true,
    });
  };

  handleProjectsClick = () => {
    const { trayActive, projectsActive, notesActive, trashActive } = this.state;
    if (!trayActive) {
      //if tray is not active, activate it with projects showing
      this.setState({
        trayActive: true,
        projectsActive: true,
        notesActive: false,
      });
    }
    if (trayActive && projectsActive) {
      //if tray is active with projects showing, close the tray
      this.setState({
        trayActive: false,
        projectsActive: true,
        notesActive: false,
      });
    }
    if (trayActive && notesActive) {
      //if tray is active with notes showing, switch back to projects tray
      this.setState({
        trayActive: true,
        projectsActive: true,
        notesActive: false,
      });
    }
  };

  handleTrashClick = () => {
    const { trayActive, projectsActive, notesActive, trashActive } = this.state;
    console.log("clicked trash");
    if (!trayActive) {
      this.setState({ trashActive: true });
    }
    if (trayActive) {
      this.setState({ trayActive: false, trashActive: true });
    }
    if (trashActive) {
      this.setState({ trashActive: false });
    }
  };

  render() {
    //destructure state variables
    const { trayActive, projectsActive, notesActive, trashActive } = this.state;
    return (
      <SidebarContainer>
        <StyledSidebar>
          <SidebarSection id="sidebar-profile"></SidebarSection>
          <SidebarSection id="sidebar-data">
            {/* Map over sidebar data to fill sidebar */}
            {SidebarData.map(({ title, path, icon }, index) => {
              if (title === "Projects") {
                return (
                  <SidebarItem
                    to={`${path}`}
                    key={index}
                    onClick={() => this.handleProjectsClick()}
                  >
                    <SidebarIcon>{icon}</SidebarIcon>
                    <SidebarLabel>{title}</SidebarLabel>
                  </SidebarItem>
                );
              }
              if (title === "Trash") {
                return (
                  <SidebarItem
                    to={`${path}`}
                    key={index}
                    onClick={() => this.handleTrashClick()}
                  >
                    <SidebarIcon>{icon}</SidebarIcon>
                    <SidebarLabel>{title}</SidebarLabel>
                  </SidebarItem>
                );
              }
              return (
                <SidebarItem to={`${path}`} key={index}>
                  <SidebarIcon>{icon}</SidebarIcon>
                  <SidebarLabel>{title}</SidebarLabel>
                </SidebarItem>
              );
            })}
          </SidebarSection>
          <SidebarSection id="sidebar-tools"></SidebarSection>
        </StyledSidebar>
        <SidebarTray
          trayActive={trayActive}
          projectsActive={projectsActive}
          notesActive={notesActive}
          trashActive={trashActive}
          setNotesActive={this.setNotesActive}
        />
      </SidebarContainer>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Sidebar));
