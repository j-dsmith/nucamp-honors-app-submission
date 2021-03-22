import React from "react";
import { EditorButton } from "./Editor.styles";

const Toolbar = () => {
  return (
    <div id="toolbar">
      <select
        className="ql-header"
        defaultValue={""}
        onChange={(e) => e.persist()}
      >
        <option value="1"></option>
        <option value="2"></option>
        <option selected></option>
      </select>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <button className="ql-strike"></button>
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-indent" value="-1"></button>
      <button className="ql-indent" value="+1"></button>
      <button className="ql-save">
        <EditorButton id="save-note">Save</EditorButton>
      </button>
      {/* <button className="ql-update">
        <EditorButton id="update-note">Update</EditorButton>
      </button> */}
    </div>
  );
};

export default Toolbar;
