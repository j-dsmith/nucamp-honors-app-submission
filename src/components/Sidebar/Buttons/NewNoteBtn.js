import React from "react";
import * as BsIcons from "react-icons/bs";
import { NewBtn } from "../Sidebar.styles";

const NewNoteBtn = ({
  projectSelectedId,
  newNoteTitle,
  addNote,
  deleteActive,
}) => {
  const id = Math.floor(Math.random() * 10000);
  const date = new Date().toLocaleDateString("en-US");

  const handleClick = () => {
    if (deleteActive) {
      return null;
    }
    return addNote({
      projectId: projectSelectedId,
      noteId: id,
      title: newNoteTitle,
      text: "",
      date: date,
    });
  };

  return (
    <NewBtn onClick={() => handleClick()} className="new-note-btn">
      <BsIcons.BsFilePlus className="add-item" />
    </NewBtn>
  );
};

export default NewNoteBtn;

//? from editor, old save button before moving logic to button
// onClickSave = () => {
//   const date = new Date().toLocaleDateString();
//   const noteId = Math.floor(Math.random() * 10000);
//   this.props.addNote({ ...this.state, date, noteId });
// };
