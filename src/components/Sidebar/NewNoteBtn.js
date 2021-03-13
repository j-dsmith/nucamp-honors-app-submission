import React from "react";
import * as BsIcons from "react-icons/bs";
import { NewBtn } from "./Sidebar.styles";

const NewNoteBtn = ({ note, addNote }) => {
  return (
    <NewBtn className="new-note-btn">
      <div className="add-item">
        <BsIcons.BsFilePlus />
      </div>
    </NewBtn>
  );
};

export default NewNoteBtn;
