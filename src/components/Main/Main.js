import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../../redux/ActionCreators";
import Sidebar from "./Sidebar/Sidebar";

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
      </div>
    );
  }
}

export default Main;