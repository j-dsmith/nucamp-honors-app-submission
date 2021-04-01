import React from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { removeHtmlTags } from "../../helpers";
import FadeInEditor from "../Editor/Editor.styles";
import InfoToast from "../Toast/InfoToast";
import {
  TrashHeading,
  TrashContainer,
  FlexContainer,
  DeletedNote,
  DeletedTitle,
  DeletedContent,
} from "./Trash.styles";

const mapStateToProps = (state) => ({
  deleted: state.projects.deleted,
});

const Trash = ({ deleted }) => {
  const { deletedNotes } = deleted;

  return (
    <>
      <InfoToast
        heading="Trash"
        content="Deleted notes are displayed here, restoral of deleted content is a feature to be implemented in the future. "
        positionX={245}
        positionY={100}
      />
      <FadeInEditor>
        <TrashHeading>Deleted Notes</TrashHeading>
        <TrashContainer>
          <Scrollbars>
            <FlexContainer>
              {deletedNotes.map((note, index) => (
                <DeletedContent key={index}>
                  <DeletedNote>
                    <p>{removeHtmlTags(note.text)}</p>
                  </DeletedNote>
                  <div className="note-info-col">
                    <DeletedTitle className={!note.title && "untitled"}>
                      {note.title ? note.title : "Untitled"}
                    </DeletedTitle>
                    <h4 className="note-id">ID: {note.noteId}</h4>
                    <p className="date">Created: {note.dateCreated}</p>
                  </div>
                </DeletedContent>
              ))}
            </FlexContainer>
          </Scrollbars>
        </TrashContainer>
      </FadeInEditor>
    </>
  );
};

export default connect(mapStateToProps)(Trash);
