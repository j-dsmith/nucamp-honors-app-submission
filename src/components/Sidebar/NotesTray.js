import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { addNote, addProject } from "../../redux/ActionCreators";
import {
  SidebarCard,
  SidebarTray,
  TrayHeading,
  NewItemInput,
} from "./Sidebar.styles";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import NewProjectBtn from "./NewProjectBtn";
import NewNoteBtn from "./NewNoteBtn";

//map dispatch to props for adding notes/projects
const mapDispatchToProps = {
  addNote: () => addNote(),
  addProject: (project) => addProject(project),
};

//map state to props for projects

const NotesTray = ({ projects, active, addNote, addProject }) => {
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  //if a project is clicked on, rerender tray with project contents
  //if a project isnt selected yet, render the project tray
  if (!selectedProject) {
    //! make separate component for each tray - projects, notes, trash
    return (
      <SidebarTray className={active ? "active" : null}>
        {/* conditionally render title - either projects or notes depending on selected tray */}
        <h2>Projects</h2>
        <TrayHeading>
          <NewItemInput
            placeholder="New Project"
            value={newProjectTitle}
            onChange={(e) => setNewProjectTitle(e.target.value)}
          />
          <NewProjectBtn noteTitle={newNoteTitle} addProject={addProject} />
        </TrayHeading>
        <SidebarCard className="projects-tray">
          <ul>
            {projects.map((project) => {
              return (
                <li key={project.id}>
                  <div
                    className="project-list-item"
                    onClick={() => setSelectedProject(project)}
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
      </SidebarTray>
    );
  }

  return (
    <SidebarTray className={active ? "active" : null}>
      <h2>{selectedProject.title}</h2>
      <TrayHeading>
        <NewItemInput
          placeholder="New Note"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
        <NewNoteBtn />
      </TrayHeading>
      <SidebarCard className="projects-tray">
        <ul>
          {selectedProject.notes.map((note) => {
            return (
              <li key={note.id}>
                <div className="notes-list-item">
                  <div className="list-icon">
                    <BsIcons.BsFileText />
                  </div>
                  <div className="notes-list-content">
                    <h4 className="notes-list-title">{note.title}</h4>
                    <p>{note.text}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </SidebarCard>
    </SidebarTray>
  );
};

export default connect(null, mapDispatchToProps)(NotesTray);
