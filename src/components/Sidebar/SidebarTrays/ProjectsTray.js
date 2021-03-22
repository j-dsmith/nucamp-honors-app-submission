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
  deleted: state.projects.deleted,
});

const ProjectsTray = ({
  projects,
  trayActive,
  handleProjectSelected,
  addProject,
  deleted,
  deleteProject,
}) => {
  const [newProjectTitle, setNewProjectTitle] = useState("");

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
          deleteActive={deleted.deleteActive}
        />
        <DeleteProjectBtn />
      </TrayHeading>
      <SidebarCard className="projects-tray fade">
        <ul>
          {projects.projects.map((project) => {
            return (
              <li
                key={project.projectId}
                className={deleted.deleteActive ? "delete-active" : null}
              >
                {deleted.deleteActive ? (
                  <div className="project-list-item">
                    <div className="list-icon trash">
                      <BsIcons.BsFolderMinus />
                    </div>
                    <h4 className="project-list-title">{project.title}</h4>
                    <div
                      className="list-icon"
                      id="x-icon-right"
                      onClick={() => deleteProject(project.projectId)}
                    >
                      <BsIcons.BsX />
                    </div>
                  </div>
                ) : (
                  <Link to={`/projects/${project.projectId}`}>
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
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </SidebarCard>
    </StyledTray>
  );
};

export default connect(mapStateToProps)(ProjectsTray);
