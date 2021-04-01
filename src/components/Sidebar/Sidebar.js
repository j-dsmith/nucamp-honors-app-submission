import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  SidebarContainer,
  SidebarSection,
  StyledSidebar,
  SidebarLabel,
  SidebarIcon,
  SidebarItem,
  LogoutBtn,
} from "./Sidebar.styles";
import { Slider } from "../Toast/Toast.styles";
import ProfileCard from "../Profile/ProfileCard";
import SidebarTray from "./SidebarTrays/SidebarTray";
import { SidebarData } from "./SidebarData";
import { toggleDelete, logout, toggleTips } from "../../redux/ActionCreators";
import * as VscIcons from "react-icons/vsc";

const mapStateToProps = (state) => ({
  deleted: state.projects.deleted,
  tipsOn: state.user.tipsOn,
});

const mapDispatchToProps = {
  toggleDelete: () => toggleDelete(),
  logout,
  toggleTips,
};

class Sidebar extends Component {
  state = {
    trayActive: false,
    projectsActive: true,
    notesActive: false,
    loggedOut: false,
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

  handleLogout = () => {
    this.setState({ loggedOut: true });
    this.props.logout();
  };

  render() {
    //destructure state variables
    const { trayActive, projectsActive, notesActive, loggedOut } = this.state;

    return (
      <SidebarContainer>
        <StyledSidebar>
          <SidebarSection id="sidebar-profile">
            <ProfileCard />
          </SidebarSection>
          <SidebarSection id="sidebar-data">
            {/* Map over sidebar data to fill sidebar */}
            {SidebarData.map(({ title, path, icon }, index) => {
              if (title === "PROJECTS") {
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
              if (title === "TRASH") {
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
              if (title === "HOME") {
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
          <SidebarSection id="sidebar-tools">
            {/* Toggle switch for help toasts */}

            <div className="hints-toggle">
              <label className="slider-label" htmlFor="switch">
                Hints on?
              </label>
              <Slider id="switch">
                <input
                  type="checkbox"
                  onChange={() => {
                    this.props.toggleTips();
                  }}
                  checked={this.props.tipsOn}
                />
                <span class="slider round"></span>
              </Slider>
            </div>

            <LogoutBtn id="logout-btn" onClick={() => this.handleLogout()}>
              Sign Out <VscIcons.VscSignOut id="logout-icon" />
            </LogoutBtn>
          </SidebarSection>
        </StyledSidebar>

        <SidebarTray
          trayActive={trayActive}
          projectsActive={projectsActive}
          notesActive={notesActive}
          setNotesActive={this.setNotesActive}
        />

        {loggedOut && <Redirect to="/" />}
      </SidebarContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
