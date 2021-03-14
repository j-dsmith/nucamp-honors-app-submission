import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import {
  SidebarCard,
  StyledTray,
  TrayHeading,
  NewItemInput,
} from "./Sidebar.styles";
import NewNoteBtn from "./NewNoteBtn";

const NotesTray = ({ projectSelected, active, addNote }) => {
  const [newNoteTitle, setNewNoteTitle] = useState("");
  return (
    <StyledTray className={active ? "active" : null}>
      <h2>{projectSelected.title}</h2>
      <TrayHeading>
        <NewItemInput
          placeholder="New Note"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
        <NewNoteBtn
          projectSelected={projectSelected}
          newNoteTitle={newNoteTitle}
          addNote={addNote}
        />
      </TrayHeading>
      <SidebarCard className="projects-tray">
        <ul>
          {projectSelected.notes.map((note) => {
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
    </StyledTray>
  );
};

export default NotesTray;
