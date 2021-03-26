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
import ProfileCard from "../Profile/ProfileCard";
import SidebarTray from "./SidebarTrays/SidebarTray";
import { SidebarData } from "./SidebarData";
import { toggleDelete } from "../../redux/ActionCreators";

const mapStateToProps = (state) => ({
  deleted: state.projects.deleted,
});

const mapDispatchToProps = {
  toggleDelete: () => toggleDelete(),
};

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
    const { trayActive, projectsActive, notesActive } = this.state;
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
    const { trayActive } = this.state;
    const { deleted, toggleDelete } = this.props;
    if (deleted.deleteActive) {
      toggleDelete();
    }
    if (trayActive) {
      this.setState({ trayActive: false });
    }
  };

  handleHomeClick = () => {
    this.setState({
      trayActive: false,
      projectsActive: true,
      notesActive: false,
    });
  };

  render() {
    //destructure state variables
    const { trayActive, projectsActive, notesActive } = this.state;

    return (
      <SidebarContainer>
        <StyledSidebar>
          <SidebarSection id="sidebar-profile">
            <ProfileCard />
          </SidebarSection>
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
              if (title === "Home") {
                return (
                  <SidebarItem
                    to={`${path}`}
                    key={index}
                    onClick={() => this.handleHomeClick()}
                  >
                    <SidebarIcon>{icon}</SidebarIcon>
                    <SidebarLabel>{title}</SidebarLabel>
                  </SidebarItem>
                );
              }
              return <div />;
            })}
          </SidebarSection>
          <SidebarSection id="sidebar-tools"></SidebarSection>
        </StyledSidebar>
        <SidebarTray
          trayActive={trayActive}
          projectsActive={projectsActive}
          notesActive={notesActive}
          setNotesActive={this.setNotesActive}
        />
      </SidebarContainer>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
