import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import ReactHtmlParser from "react-html-parser";
import {
  SidebarCard,
  StyledTray,
  TrayHeading,
  NewItemInput,
} from "../Sidebar.styles";
import NewNoteBtn from "../Buttons/NewNoteBtn";
import DeleteProjectBtn from "../Buttons/DeleteProjectBtn";
import { deleteNote, setContentSelected } from "../../../redux/ActionCreators";

const mapStateToProps = (state) => ({
  projects: state.projects,
  deleted: state.projects.deleted,
  contentSelected: state.contentSelected,
});

const mapDispatchToProps = {
  setContentSelected: (projectId, noteId) =>
    setContentSelected(projectId, noteId),
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
  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>?/gm, "");
  };

  const currentProject = projects.projects.find(
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
          deleteActive={deleted.deleteActive}
        />
        <DeleteProjectBtn />
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
                      <p>
                        {removeHtmlTags(note.text.substring(0, 20)) + "..."}
                      </p>
                    </div>

                    <div
                      className="list-icon"
                      id="x-icon-right"
                      onClick={() => deleteNote(projectSelectedId, note.noteId)}
                    >
                      <BsIcons.BsX />
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
                        <p>
                          {removeHtmlTags(note.text.substring(0, 20)) + "..."}
                        </p>
                      </div>
                      {contentSelected.noteSelectedId === note.noteId ? (
                        <div className="list-icon" id="selected-icon-container">
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
    </StyledTray>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesTray);
