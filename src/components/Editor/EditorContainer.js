import React from "react";
import { connect } from "react-redux";
import { GridContainer } from "./Editor.styles";
import Editor from "./Editor";

const mapStateToProps = (state) => ({
  projects: state.projects,
  contentSelected: state.contentSelected,
  deleted: state.projects.deleted,
});

const EditorContainer = ({ projects, contentSelected, deleted }) => {
  const { isNoteSelected, noteSelectedId, projectSelectedId } = contentSelected;

  const selectedNote = projects.projects
    .find((project) => project.projectId === projectSelectedId)
    .notes.find((note) => note.noteId === noteSelectedId);

  return (
    <GridContainer>
      {isNoteSelected && !deleted.deleteActive ? (
        <Editor
          selectedNote={!deleted.deleteActive ? selectedNote : null}
          projectId={projectSelectedId}
        />
      ) : null}
    </GridContainer>
  );
};

export default connect(mapStateToProps)(EditorContainer);
