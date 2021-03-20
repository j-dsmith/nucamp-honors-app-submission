import React from "react";
import {
  StyledEditor,
  NoteTitle,
  StyledNote,
  EditorButton,
} from "./Editor.styles";
import * as BsIcons from "react-icons/bs";

const Note = ({ selectedTitle, selectedText }) => {
  return (
    <>
      <NoteTitle value={selectedTitle} />
      <StyledNote>
        <button onClick>
          <BsIcons.BsPencilSquare id="edit-button" />
        </button>
        <div>{selectedText}</div>
      </StyledNote>
    </>
  );
};

export default Note;
