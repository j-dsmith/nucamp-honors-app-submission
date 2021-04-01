import React from "react";
import { connect } from "react-redux";
import FadeInEditor, { GridContainer } from "./Editor.styles";
import Editor from "./Editor";
import InfoToast from "../Toast/InfoToast";

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
    <FadeInEditor>
      <GridContainer>
        <InfoToast
          heading="Start a new note!"
          content="The editor is your space to create your next masterpiece, or just organize your thoughts. The save button will ensure your content is stored safely."
          positionX={515}
        />
        {isNoteSelected && !deleted.deleteActive && (
          <Editor
            selectedNote={!deleted.deleteActive && selectedNote}
            projectId={projectSelectedId}
          />
        )}
      </GridContainer>
    </FadeInEditor>
  );
};

export default connect(mapStateToProps)(EditorContainer);
