import React from "react";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import { toggleDelete } from "../../../redux/ActionCreators";
import { NewBtn } from "../Sidebar.styles";

const mapStateToProps = (state) => ({
  deleted: state.projects.deleted,
});

const mapDispatchToProps = {
  toggleDelete: (itemType) => toggleDelete(itemType),
};

const DeleteProjectBtn = ({ toggleDelete, deleted }) => {
  const { deleteProjectActive, deleteNoteActive } = deleted;

  return (
    <NewBtn
      onClick={() => toggleDelete(deleteProjectActive ? "project" : "note")}
      deleteActive={deleteNoteActive || deleteProjectActive ? true : false}
    >
      <BsIcons.BsTrash className="delete-item" />
    </NewBtn>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProjectBtn);
