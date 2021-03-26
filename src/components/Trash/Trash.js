import React from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { removeHtmlTags } from "../Sidebar/SidebarTrays/NotesTray";
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
  //extract all notes from deleted projects

  return (
    <>
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
                  <DeletedTitle className={note.title ? null : "untitled"}>
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
    </>
  );
};

export default connect(mapStateToProps)(Trash);
