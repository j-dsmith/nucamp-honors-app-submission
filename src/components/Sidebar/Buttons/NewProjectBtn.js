import React from "react";
import * as BsIcons from "react-icons/bs";
import { NewBtn } from "../Sidebar.styles";

const NewProjectBtn = ({ newProjectTitle, addProject, deleteActive }) => {
  const id = Math.floor(Math.random() * 10000);

  const handleClick = () => {
    if (deleteActive) {
      return null;
    }
    return addProject({
      projectId: id,
      title: newProjectTitle,
      notes: [],
    });
  };

  return (
    <NewBtn onClick={() => handleClick()} className="new-project-btn">
      <div className="add-item">
        <BsIcons.BsFolderPlus />
      </div>
    </NewBtn>
  );
};

export default NewProjectBtn;
