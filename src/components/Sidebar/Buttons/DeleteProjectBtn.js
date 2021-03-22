import React from "react";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import { toggleDelete } from "../../../redux/ActionCreators";
import { NewBtn } from "../Sidebar.styles";

const mapStateToProps = (state) => ({
  deleted: state.projects.deleted,
});

const mapDispatchToProps = {
  toggleDelete: () => toggleDelete(),
};

const DeleteProjectBtn = ({ toggleDelete, deleted }) => {
  return (
    <NewBtn
      onClick={() => toggleDelete()}
      deletedActive={deleted.deleteActive ? true : false}
    >
      <BsIcons.BsTrash className="delete-item" />
    </NewBtn>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProjectBtn);
