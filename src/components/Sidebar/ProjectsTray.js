import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import {
  SidebarCard,
  StyledTray,
  TrayHeading,
  NewItemInput,
} from "./Sidebar.styles";
import NewProjectBtn from "./NewProjectBtn";

const ProjectsTray = ({
  projects,
  active,
  handleProjectSelected,
  addProject,
}) => {
  const [newProjectTitle, setNewProjectTitle] = useState("");
  return (
    <StyledTray className={active ? "active" : null}>
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
      <SidebarCard className="projects-tray">
        <ul>
          {projects.projects.map((project) => {
            return (
              <li key={project.id}>
                <div
                  className="project-list-item"
                  onClick={() => {
                    handleProjectSelected(project);
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

export default ProjectsTray;
