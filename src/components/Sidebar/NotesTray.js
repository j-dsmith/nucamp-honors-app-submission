import React, { useState } from "react";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import {
  SidebarCard,
  StyledTray,
  TrayHeading,
  NewItemInput,
} from "./Sidebar.styles";
import NewNoteBtn from "./NewNoteBtn";

const mapStateToProps = (state) => ({
  projects: state,
});

const NotesTray = ({ projectSelectedId, trayActive, addNote, projects }) => {
  const [newNoteTitle, setNewNoteTitle] = useState("");

  const currentProject = projects.find(
    (project) => project.projectId === projectSelectedId
  );

  return (
    <StyledTray className={trayActive ? "tray-active" : null}>
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
      <SidebarCard className="projects-tray">
        <ul>
          {currentProject.notes.map((note) => {
            return (
              <li key={note.noteId}>
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
    </StyledTray>
  );
};

export default connect(mapStateToProps)(NotesTray);
