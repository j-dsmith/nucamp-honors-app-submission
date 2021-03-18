import React, { useState } from "react";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import { SidebarCard, StyledTray, TrayHeading } from "../Sidebar.styles";

const mapStateToProps = (state) => ({
  projects: state,
});

const DeletedTray = (trashActive, handleProjectSelected, projects) => {
  return (
    <StyledTray className={trashActive ? "trash-active" : null} deletedTray>
      <h2>Trash</h2>
      <TrayHeading></TrayHeading>
      <SidebarCard className="projects-tray fade">
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.projectId}>
                <div
                  className="project-list-item"
                  onClick={() => {
                    handleProjectSelected(project.projectId);
                  }}
                >
                  <div className="list-icon">
                    <BsIcons.BsFolder />
                  </div>
                  <h4 className="project-list-title">{project.title}</h4>
                  <div className="list-icon" id="arrow-right">
                    <BiIcons.BiRightArrowAlt />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </SidebarCard>
    </StyledTray>
  );
};

export default connect(mapStateToProps)(DeletedTray);
