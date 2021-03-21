import React from "react";
import { connect } from "react-redux";
import { StyledContainer, StyledNote } from "./Editor.styles";
import Editor from "./Editor";

const mapStateToProps = (state) => ({
  projects: state.projects,
  contentSelected: state.contentSelected,
});

const EditorContainer = ({ projects, contentSelected }) => {
  const { isNoteSelected, noteSelectedId, projectSelectedId } = contentSelected;

  const selectedNote = projects
    .find((project) => project.projectId === projectSelectedId)
    .notes.find((note) => note.noteId === noteSelectedId);

  console.log(selectedNote);

  return (
    <StyledContainer>
      {isNoteSelected ? (
        <Editor selectedNote={selectedNote} projectId={projectSelectedId} />
      ) : null}
    </StyledContainer>
  );
};

export default connect(mapStateToProps)(EditorContainer);
