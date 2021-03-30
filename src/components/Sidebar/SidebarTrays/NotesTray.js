import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars";
import {
  SidebarCard,
  StyledTray,
  TrayHeading,
  NewItemInput,
} from "../Sidebar.styles";
import NewNoteBtn from "../Buttons/NewNoteBtn";
import DeleteBtn from "../Buttons/DeleteBtn";
import {
  addNote,
  deleteNote,
  setContentSelected,
} from "../../../redux/ActionCreators";

const mapStateToProps = (state) => ({
  projects: state.projects,
  deleted: state.projects.deleted,
  contentSelected: state.contentSelected,
});

const mapDispatchToProps = {
  setContentSelected: (projectId, noteId) =>
    setContentSelected(projectId, noteId),
  addNote: (note) => addNote(note),
  deleteNote: (projectId, noteId) => deleteNote(projectId, noteId),
};

export const removeHtmlTags = (str) => {
  return str.replace(/<[^>]*>?/gm, "");
};

const NotesTray = ({
  projectSelectedId,
  trayActive,
  addNote,
  deleted,
  deleteNote,
  projects,
  setContentSelected,
  contentSelected,
}) => {
  const [newNoteTitle, setNewNoteTitle] = useState("");

  const handleNoteSelected = (projectId, noteId) => {
    setContentSelected(projectId, noteId);
  };

  //helper regex function for removing html tags,
  //source: freecodecamp - Intermediate React and Firebase Tutorial - Build an Evernote Clone (https://www.youtube.com/watch?v=I250xdtUvy8&t=3763s)

  const currentProject = projects.projects.find(
    (project) => project.projectId === projectSelectedId
  );

  return (
    <StyledTray className={trayActive ? "tray-active" : null} projectsTray>
      <Scrollbars>
        <h2 style={{ textShadow: "1px 1px 4px #292929" }}>
          {currentProject.title ? currentProject.title : "Untitled Project"}
        </h2>
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
            deleteActive={deleted.deleteActive}
          />
          <DeleteBtn />
        </TrayHeading>
        <SidebarCard className="projects-tray fade">
          <ul>
            {currentProject.notes.map((note) => {
              return (
                <li
                  key={note.noteId}
                  className={deleted.deleteActive ? "delete-active" : null}
                >
                  {deleted.deleteActive ? (
                    <div className="notes-list-item">
                      <div className="list-icon minus">
                        <BsIcons.BsFileMinus />
                      </div>
                      <div className="notes-list-content">
                        <h4 className="notes-list-title">{note.title}</h4>
                        <p className="note-text">
                          {removeHtmlTags(note.text.substring(0, 20)) + "..."}
                        </p>
                      </div>

                      <div
                        className="list-icon"
                        id="x-icon-right"
                        onClick={() =>
                          deleteNote(projectSelectedId, note.noteId)
                        }
                      >
                        <BsIcons.BsXCircleFill />
                      </div>
                    </div>
                  ) : (
                    <Link to={`/projects/${projectSelectedId}/${note.noteId}`}>
                      <div
                        className="notes-list-item"
                        onClick={() =>
                          handleNoteSelected(projectSelectedId, note.noteId)
                        }
                      >
                        <div className={`list-icon`}>
                          <BsIcons.BsFileText />
                        </div>
                        <div className="notes-list-content">
                          <h4 className="notes-list-title">{note.title}</h4>
                          <p className="note-text">
                            {removeHtmlTags(note.text.substring(0, 20)) + "..."}
                          </p>
                        </div>
                        {contentSelected.noteSelectedId === note.noteId ? (
                          <div
                            className="list-icon"
                            id="selected-icon-container"
                          >
                            <BsIcons.BsDot id="selected-dot" />
                          </div>
                        ) : null}
                      </div>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </SidebarCard>
      </Scrollbars>
    </StyledTray>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesTray);
