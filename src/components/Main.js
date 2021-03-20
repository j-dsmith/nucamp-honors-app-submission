import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { addNote, deleteNote } from "../redux/ActionCreators";
import Sidebar from "./Sidebar/Sidebar";
import Editor from "./Editor/Editor";
import EditorContainer from "./Editor/EditorContainer";

const mapStateToProps = (state) => ({
  projects: state.projects,
  contentSelected: state.contentSelected,
});

const mapDispatchToProps = {
  addNote: (text) => addNote(text),
  deleteNote: (id) => deleteNote(id),
};

class Main extends Component {
  render() {
    const {
      active,
      showProjects,
      showNotes,
      noteSelected,
      projects,
    } = this.props;

    return (
      <div className={"grid-container"}>
        <Sidebar />
        {/* create routes here, home - projects, notes (note id for custom param routes), trash */}
        <Switch>
          <Route path="/home" />

          <Route exact path="/projects" />
          <Route
            exact
            path="/projects/:projectId"
            render={() => <EditorContainer />}
          />
          <Route
            path="/projects/:projectId/:noteId"
            render={() => <EditorContainer />}
          />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
