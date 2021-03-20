import React from "react";
import { connect } from "react-redux";
import { StyledContainer, StyledNote } from "./Editor.styles";
import Transition from "react-transition-group";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  useParams,
} from "react-router-dom";

import Editor from "./Editor";
import Note from "./Note";

const mapStateToProps = (state) => ({
  projects: state.projects,
  contentSelected: state.contentSelected,
});

const EditorContainer = ({ projects, contentSelected }) => {
  //using project id and note id, find matching note in state and store in selectedNote
  const selectedNote = projects
    .find((project) => project.projectId === contentSelected.projectSelectedId)
    .notes.find((note) => note.noteId === contentSelected.noteSelectedId);

  const renderEditor = (contentSelected) => {
    if (contentSelected.noteSelected) {
      return (
        //if specific note has been clicked, render the static contents of that note
        <Note
          selectedTitle={selectedNote.title}
          selectedText={selectedNote.text}
        />
      );
      //if no note selected render a blank editor
    } else {
      return <Editor />;
    }
  };

  //

  return <StyledContainer>{renderEditor(contentSelected)}</StyledContainer>;
};

export default connect(mapStateToProps)(EditorContainer);
