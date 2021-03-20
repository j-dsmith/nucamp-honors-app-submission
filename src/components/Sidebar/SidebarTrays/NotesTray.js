import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import {
  SidebarCard,
  StyledTray,
  TrayHeading,
  NewItemInput,
} from "../Sidebar.styles";
import NewNoteBtn from "../Buttons/NewNoteBtn";
import DeleteProjectBtn from "../Buttons/DeleteProjectBtn";
import { setContentSelected } from "../../../redux/ActionCreators";

const mapStateToProps = (state) => ({
  projects: state.projects,
  noteSelected: state.noteSelected,
});

const mapDispatchToProps = {
  setContentSelected: (projectId, noteId) =>
    setContentSelected(projectId, noteId),
};

const NotesTray = ({
  projectSelectedId,
  trayActive,
  addNote,
  deleteProject,
  projects,
  setContentSelected,
  noteSelected,
}) => {
  const [newNoteTitle, setNewNoteTitle] = useState("");

  const handleNoteSelected = (projectId, noteId) => {
    setContentSelected(projectId, noteId);
  };

  const currentProject = projects.find(
    (project) => project.projectId === projectSelectedId
  );

  return (
    <StyledTray className={trayActive ? "tray-active" : null} projectsTray>
      <h2>{currentProject.title}</h2>
      <TrayHeading>
        <NewItemInput
          placeholder="New Note"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
        <NewNoteBtn
          projectSelectedId={projectSelectedId}
          newNoteTitle={newNoteTitle}
          addNote={addNote}
        />
      </TrayHeading>
      <SidebarCard className="projects-tray fade">
        <ul>
          {currentProject.notes.map((note) => {
            return (
              <li
                key={note.noteId}
                className={noteSelected ? "selected" : null}
                onClick={() =>
                  handleNoteSelected(projectSelectedId, note.noteId)
                }
              >
                <Link to={`/projects/${projectSelectedId}/${note.noteId}`}>
                  <div className="notes-list-item">
                    <div
                      className={`list-icon ${noteSelected ? "hidden" : null}`}
                    >
                      <BsIcons.BsFileText />
                    </div>
                    <div className="notes-list-content">
                      <h4 className="notes-list-title">{note.title}</h4>

                      <p className={noteSelected ? "selected" : null}>
                        {noteSelected ? note.dateCreated : note.text}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </SidebarCard>
    </StyledTray>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesTray);
