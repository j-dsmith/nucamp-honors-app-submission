import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { StyledEditor, NoteTitle } from "./Editor.styles";
import Toolbar from "./Toolbar";

export default class Editor extends Component {
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
    return (
      <>
        <NoteTitle
          type="text"
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
            value={this.state.text}
            onChange={this.handleChange}
          />
        </StyledEditor>
      </>
    );
  }
}
