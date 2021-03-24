import React from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import {
  TrashHeading,
  TrashContainer,
  FlexContainer,
  DeletedNote,
  DeletedTitle,
  DeletedContent,
} from "./Trash.styles";
import * as BsIcons from "react-icons/bs";

const mapStateToProps = (state) => ({
  deleted: state.projects.deleted,
});

const Trash = ({ deleted }) => {
  const { deletedNotes } = deleted;
  //extract all notes from deleted projects

  return (
    <>
      <TrashHeading>
        Trash{" "}
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <BsIcons.BsTrash />
        </div>
      </TrashHeading>
      <TrashContainer>
        <Scrollbars>
          <FlexContainer>
            {deletedNotes.map((note, index) => (
              <DeletedContent key={index}>
                <DeletedNote>{note.noteId}</DeletedNote>
                <DeletedTitle className={note.title ? null : "untitled"}>
                  {note.title ? note.title : "Untitled"}
                </DeletedTitle>
                <p className="date">Created: {note.dateCreated}</p>
              </DeletedContent>
            ))}
          </FlexContainer>
        </Scrollbars>
      </TrashContainer>
    </>
  );
};

export default connect(mapStateToProps)(Trash);
