import React from "react";
import * as BsIcons from "react-icons/bs";
import { NewBtn } from "./Sidebar.styles";

const NewProjectBtn = ({ newProjectTitle, addProject }) => {
  const id = Math.floor(Math.random() * 10000);

  return (
    <NewBtn
      onClick={() =>
        addProject({
          projectId: id,
          title: newProjectTitle,
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
