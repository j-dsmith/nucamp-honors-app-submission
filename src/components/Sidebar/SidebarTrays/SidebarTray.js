import React, { Component } from "react";
import { connect } from "react-redux";
import { setContentSelected } from "../../../redux/ActionCreators";
import ProjectsTray from "./ProjectsTray";
import NotesTray from "./NotesTray";

//map state to props for projects
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
//map dispatch to props for adding notes/projects
const mapDispatchToProps = {
  setContentSelected: (projectId, noteId) =>
    setContentSelected(projectId, noteId),
};

class SidebarTray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectSelectedId: null,
      projectDeleted: false,
    };
  }

  //on click, update tray visibility state to hide projects and show notes
  handleProjectSelected = (id) => {
    this.setState({ projectSelectedId: id });
    //onclick set the project selected Id
    this.props.setContentSelected(id);
    //once project is clicked, set the notes tray active to render project contents
    this.props.setNotesActive();
  };

  handleTrashSelected = () => {};

  render() {
    //bring in trayVisible from store which holds active, showProjects, showNotes
    //bring in projects from store and addProject dispatch from store
    const { trayActive, projectsActive, notesActive } = this.props;

    const { projectSelectedId } = this.state;

    if (projectsActive) {
      return (
        <ProjectsTray
          trayActive={trayActive}
          handleProjectSelected={this.handleProjectSelected}
          projectsTray
        />
      );
    }
    if (notesActive) {
      return (
        <NotesTray
          projectSelectedId={projectSelectedId}
          trayActive={trayActive}
          projectsTray
        />
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTray);
