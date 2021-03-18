import React from "react";
import * as BsIcons from "react-icons/bs";
import { deleteProject } from "../../../redux/ActionCreators";
import { NewBtn } from "../Sidebar.styles";

const DeleteProjectBtn = ({ deleteProject, projectSelectedId }) => {
  return (
    <NewBtn
      onClick={() =>
        deleteProject({
          projectSelectedId,
        })
      }
    >
      <div className="delete-item">
        <BsIcons.BsTrash />
      </div>
    </NewBtn>
  );
};

export default DeleteProjectBtn;
