import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { addNote, addProject, showTray } from "../../redux/ActionCreators";

import ProjectsTray from "./ProjectsTray";
import NotesTray from "./NotesTray";

//map state to props for projects
const mapStateToProps = (state) => {
  return {
    projects: state,
  };
};
//map dispatch to props for adding notes/projects
const mapDispatchToProps = {
  addNote: (note) => addNote(note),
  addProject: (project) => addProject(project),
};

class SidebarTray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectSelectedId: null,
    };
  }

  //on click, update tray visibility state to hide projects and show notes
  handleProjectSelected = (id) => {
    this.setState({ projectSelectedId: id });
  };

  render() {
    //bring in trayVisible from store which holds active, showProjects, showNotes
    //bring in projects from store and addProject dispatch from store
    const { addProject, addNote, trayActive } = this.props;
    //destructure trayTypeVisible state object for view manipulating values

    const { projectSelectedId } = this.state;

    //! make separate component for each tray - projects, notes, trash

    if (!projectSelectedId) {
      return (
        //split off into separate projects tray component

        <ProjectsTray
          trayActive={trayActive}
          handleProjectSelected={this.handleProjectSelected}
          addProject={addProject}
        />
      );
    }
    if (projectSelectedId) {
      return (
        <NotesTray
          projectSelectedId={projectSelectedId}
          trayActive={trayActive}
          addNote={addNote}
        />
      );
    }
    //split off into separate notes tray component
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTray);
