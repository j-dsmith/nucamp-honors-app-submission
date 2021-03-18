import React from "react";
import { StyledContainer } from "./Editor.styles";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Editor from "./Editor";

const EditorContainer = () => {
  return (
    <StyledContainer>
      <Editor />
    </StyledContainer>
  );
};

export default EditorContainer;
