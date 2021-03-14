import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../redux/ActionCreators";
import Sidebar from "./Sidebar/Sidebar";
import Editor from "./Editor/Editor";

const mapDispatchToProps = {
  addNote: (text) => addNote(text),
  deleteNote: (id) => deleteNote(id),
};

class Main extends Component {
  render() {
    const { active, showProjects, showNotes } = this.props;
    return (
      <div className={"grid-container"}>
        <Sidebar />
        <Editor addNote={this.props.addNote} />
        {/* <TrayData notes={this.props.notes} /> */}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
