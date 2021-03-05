import styled from "styled-components";
import ReactQuill from "react-quill";

export const StyledEditor = styled(ReactQuill)`
  margin-top: 5px;
  color: #333;
  border-radius: 15px;
  grid-column: 4 / span 4;
  grid-row: 2 / span 6;
  background-color: rgba(243, 236, 222, 0.7);
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

export const NoteTitle = styled.input`
  margin: 20px 0px 0px 8px;
  grid-column: 4 / span 4;
  grid-row: 1 / span 1;
  font-size: 2rem;
  color: #333;
  border: none;
  font-weight: bold;
  &:focus {
    outline: none;
  }
`;
