import React from "react";
import * as BsIcons from "react-icons/bs";
import { NewBtn } from "../Sidebar.styles";

const NewNoteBtn = ({ projectSelectedId, newNoteTitle, addNote }) => {
  const id = Math.floor(Math.random() * 10000);
  const date = new Date().toLocaleDateString("en-US");
  return (
    <NewBtn
      onClick={() =>
        addNote({
          projectId: projectSelectedId,
          noteId: id,
          title: newNoteTitle,
          text: "",
          date: date,
        })
      }
      className="new-note-btn"
    >
      <div className="add-item">
        <BsIcons.BsFilePlus />
      </div>
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
