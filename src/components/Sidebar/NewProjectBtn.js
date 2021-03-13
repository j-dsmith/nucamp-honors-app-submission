import React from "react";
import * as BsIcons from "react-icons/bs";
import { NewBtn } from "./Sidebar.styles";

const NewProjectBtn = ({ noteTitle, addProject }) => {
  const id = Math.floor(Math.random() * 10000);

  return (
    <NewBtn
      onClick={() =>
        addProject({
          id: id,
          title: noteTitle,
          notes: [],
        })
      }
      className="new-project-btn"
    >
      <div className="add-item">
        <BsIcons.BsFolderPlus />
      </div>
    </NewBtn>
  );
};

export default NewProjectBtn;
