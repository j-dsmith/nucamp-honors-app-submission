import React from "react";
import * as BsIcons from "react-icons/bs";
import { NewBtn } from "./Sidebar.styles";

const NewNoteBtn = ({ projectSelected, newNoteTitle, addNote }) => {
  const id = Math.floor(Math.random() * 10000);
  console.log(projectSelected.id);
  return (
    <NewBtn
      onClick={() =>
        addNote({
          projectId: projectSelected.id,
          id: id,
          title: newNoteTitle,
          text: "",
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
