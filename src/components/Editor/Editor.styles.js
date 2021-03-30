import React from "react";
import styled, { keyframes } from "styled-components";

//Editor fade styles - Fade in component source https://www.joshwcomeau.com/snippets/react-components/fade-in/
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeInEditor = ({
  duration = 300,
  delay = 0,
  children,
  ...delegated
}) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column: 1 / 9;
  grid-row: 1 / 9;
`;
export default FadeInEditor;

//Editor Styles

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column: 3 / 9;
  grid-row: 1 / 9;
`;

export const StyledEditor = styled.div`
  margin-top: 5px;
  border-radius: 15px;
  grid-column: 2 / span 6;
  grid-row: 2 / span 6;
  background-color: #f9e8dd;
  color: #333;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  .ql.editor {
    overflow-y: scroll;
  }

  .ql-snow {
    border: none;
  }
`;

export const NewNoteTitle = styled.input`
  font-family: "Playfair Display", "Times New Roman", Times, serif;
  margin: 20px 0px 0px 8px;
  grid-column: 2 / span 5;
  grid-row: 1 / span 1;
  font-size: 3rem;
  color: #333;
  border: none;
  font-weight: bold;
  background: none;
  &:focus {
    outline: none;
  }
`;

export const EditorButton = styled.span`
  background-color: #333;
  color: #48e5c2;
  border: none;
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: #0a0a0a;
  }
`;
