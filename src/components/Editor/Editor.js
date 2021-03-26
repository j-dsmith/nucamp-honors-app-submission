import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { StyledEditor, NewNoteTitle } from "./Editor.styles";
import Toolbar from "./Toolbar";
import { addNote, updateNote } from "../../redux/ActionCreators";

const mapStateToProps = (state) => ({
  contentSelected: state.contentSelected,
  deleted: state.projects.deleted,
});

const mapDispatchToProps = {
  addNote: (note) => addNote(note),
  updateNote: (updatedNote) => updateNote(updatedNote),
};

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      noteId: null,
      projectId: null,
    };
  }
  //focus title input on page load
  componentDidMount() {
    this.titleInput.focus();
    this.setState({
      title: this.props.selectedNote.title,
      text: this.props.selectedNote.text,
      noteId: this.props.selectedNote.noteId,
      projectId: this.props.projectId,
    });
  }

  componentDidUpdate() {
    if (
      this.props.selectedNote.noteId !== this.state.noteId &&
      !this.props.deleted.deleteActive
    )
      this.setState({
        title: this.props.selectedNote.title,
        text: this.props.selectedNote.text,
        noteId: this.props.selectedNote.noteId,
        projectId: this.props.projectId,
      });
  }

  componentWillUnmount() {
    this.setState({
      title: "",
      text: "",
      noteId: null,
      projectId: null,
    });
  }

  handleChange = (value) => {
    this.setState({ text: value });
  };

  onClickSave = () => {
    const updatedDate = new Date().toLocaleDateString();
    this.props.updateNote({
      ...this.state,
      date: updatedDate,
    });
  };

  modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        save: this.onClickSave,
        // update: this.onClickUpdate,
      },
    },
  };

  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet,",
    "indent",
    "link",
    "image",
    "code-block",
  ];

  render() {
    return (
      <>
        <NewNoteTitle
          type="text"
          value={this.state.title}
          placeholder="Title"
          onChange={(e) => this.setState({ title: e.target.value })}
          ref={(inputEl) => (this.titleInput = inputEl)}
        />

        <StyledEditor className="text-editor">
          <Scrollbars>
            <Toolbar />
            <ReactQuill
              theme="snow"
              modules={this.modules}
              formats={this.formats}
              //if note is selected, editor shows selected notes text content, otherwise show the current note
              value={this.state.text}
              onChange={this.handleChange}
            />
          </Scrollbars>
        </StyledEditor>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
