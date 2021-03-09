import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote, deleteNote } from "../redux/ActionCreators";
import Sidebar from "./Sidebar/Sidebar";
import Editor from "./Editor/Editor";
import TrayData from "./Sidebar/SidebarTray";

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
        {/* <Sidebar notes={this.props.notes} /> */}
        <Editor addNote={this.props.addNote} />
        <TrayData notes={this.props.notes} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
