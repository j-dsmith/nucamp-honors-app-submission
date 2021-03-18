import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import {
  SidebarCard,
  StyledTray,
  TrayHeading,
  NewItemInput,
} from "../Sidebar.styles";
import NewProjectBtn from "../Buttons/NewProjectBtn";
import DeleteProjectBtn from "../Buttons/DeleteProjectBtn";

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const ProjectsTray = ({
  projects,
  trayActive,
  handleProjectSelected,
  addProject,
}) => {
  const [newProjectTitle, setNewProjectTitle] = useState("");
  console.log(projects);

  return (
    <StyledTray className={trayActive ? "tray-active" : null} projectsTray>
      <h2>Projects</h2>
      <TrayHeading>
        <NewItemInput
          placeholder="New Project"
          value={newProjectTitle}
          onChange={(e) => setNewProjectTitle(e.target.value)}
        />
        <NewProjectBtn
          newProjectTitle={newProjectTitle}
          addProject={addProject}
        />
      </TrayHeading>
      <SidebarCard className="projects-tray fade">
        <ul>
          {projects.map((project) => {
            return (
              <Link to={`/projects/${project.projectId}`}>
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
              </Link>
            );
          })}
        </ul>
      </SidebarCard>
    </StyledTray>
  );
};

export default connect(mapStateToProps)(ProjectsTray);
