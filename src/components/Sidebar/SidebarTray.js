import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";
import { addNote, addProject, showTray } from "../../redux/ActionCreators";
import {
  SidebarCard,
  StyledTray,
  TrayHeading,
  NewItemInput,
} from "./Sidebar.styles";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import NewProjectBtn from "./NewProjectBtn";
import NewNoteBtn from "./NewNoteBtn";
import ProjectsTray from "./ProjectsTray";
import NotesTray from "./NotesTray";

//map state to props for projects
const mapStateToProps = (state) => {
  return {
    trayVisible: state.trayVisible,
    projects: state.projects,
  };
};
//map dispatch to props for adding notes/projects
const mapDispatchToProps = {
  addNote: (note) => addNote(note),
  addProject: (project) => addProject(project),
  showTray: (viewData) => showTray(viewData),
};

class SidebarTray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: "",
      projectSelected: null,
    };
  }

  //on click, update tray visibility state to hide projects and show notes
  handleProjectSelected = (project) => {
    this.setState({ projectSelected: project });
    this.props.showTray({
      active: true,
      showProjects: false,
      showNotes: true,
    });
  };

  render() {
    //bring in trayVisible from store which holds active, showProjects, showNotes
    //bring in projects from store and addProject dispatch from store
    const { trayVisible, projects, addProject, addNote, showTray } = this.props;
    //destructure trayTypeVisible state object for view manipulating values
    const { active, showProjects, showNotes } = trayVisible;

    const { newProjectTitle, newNoteTitle, projectSelected } = this.state;

    //! make separate component for each tray - projects, notes, trash

    if (!projectSelected) {
      return (
        //split off into separate projects tray component

        <ProjectsTray
          projects={projects}
          active={active}
          handleProjectSelected={this.handleProjectSelected}
          addProject={addProject}
        />
      );
    }
    if (projectSelected) {
      return (
        <NotesTray
          projectSelected={projectSelected}
          active={active}
          addNote={addNote}
        />
      );
    }
    //split off into separate notes tray component
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTray);
