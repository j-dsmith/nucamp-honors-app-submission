import React, { Component } from "react";
import { connect } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { StyledEditor, NoteTitle } from "./Editor.styles";
import Toolbar from "./Toolbar";

const mapStateToProps = (state) => ({
  noteSelected: state.noteSelected,
});

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
    };
  }
  //focus title input on page load
  componentDidMount() {
    this.titleInput.focus();
  }

  handleChange = (value) => {
    this.setState({ text: value });
  };

  onClickSave = () => {
    const date = new Date().toLocaleDateString();
    const id = Math.floor(Math.random() * 10000);
    this.props.addNote({ id, ...this.state, date });
  };

  modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        save: this.onClickSave,
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
    //destructure noteSelected from redux state, selectedTitle/selectedText from currently selected note to render editor values
    const { selectedTitle, selectedText, noteSelected } = this.props;
    console.log(selectedText, selectedTitle);

    return (
      <>
        <NoteTitle
          type="text"
          value={this.state.title}
          placeholder="Title"
          onChange={(e) => this.setState({ title: e.target.value })}
          ref={(inputEl) => (this.titleInput = inputEl)}
        />

        <StyledEditor className="text-editor">
          <Toolbar />
          <ReactQuill
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            //if note is selected, editor shows selected notes text content, otherwise show the current note
            value={this.state.text}
            onChange={this.handleChange}
          />
        </StyledEditor>
      </>
    );
  }
}

export default connect(mapStateToProps)(Editor);
