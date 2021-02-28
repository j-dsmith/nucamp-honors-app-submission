import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../../redux/ActionCreators";
import Sidebar from "./Sidebar/Sidebar";
import Editor from "./Editor/Editor";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = {
  addNote: (text) => addNote(text),
  deleteNote: (id) => deleteNote(id),
};

class Main extends Component {
  render() {
    return (
      <div className={"grid-container"}>
        <Sidebar />
        <Editor />
      </div>
    );
  }
}

export default Main;
