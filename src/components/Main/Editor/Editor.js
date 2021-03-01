import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import { StyledEditor, NoteTitle } from "./Editor.styles";

export default class Editor extends Component {
  state = {
    title: "",
    text: "",
  };

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
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
  ];

  handleChange = (value) => {
    this.setState({ text: value });
    console.log(this.state.text);
  };

  render() {
    return (
      <>
        <NoteTitle
          type="text"
          placeholder="Title"
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <StyledEditor
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={this.state.text}
          onChange={this.handleChange}
        ></StyledEditor>
      </>
    );
  }
}
