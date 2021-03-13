import React from "react";
import * as VscIcons from "react-icons/vsc";

const ProjectsTray = ({ projects, active }) => {
  return (
    <SidebarTray className={active ? "active" : null}>
      <h2>Projects</h2>
      <SidebarCard>
        <ul>
          {projects.map((project) => {
            return (
              <li key={project.id} className="project-list-item">
                <div className="project-list-icon">
                  <VscIcons.VscFolder />
                </div>
                <div className="project-list-title">{project.title}</div>
                <div className="project-list-count">
                  {project.contents.length()}
                </div>
              </li>
            );
          })}
        </ul>
      </SidebarCard>
    </SidebarTray>
  );
};

export default ProjectsTray;
