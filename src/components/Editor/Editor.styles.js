import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column: 3 / 9;
  grid-row: 1 / 9;
`;

export const StyledEditor = styled.div`
  margin-top: 5px;
  color: #333;
  border-radius: 15px;

  grid-column: 2 / span 6;
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

export const StyledNote = styled.div`
  margin-top: 5px;
  padding: 20px;
  color: #333;
  border-radius: 15px;
  grid-column: 2 / span 6;
  grid-row: 2 / span 6;
  background-color: rgba(243, 236, 222, 0.7);
  color: #333;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  button {
    background: none;
    border: none;
    display: block;
    margin-left: auto;
    margin-bottom: 10px;

    &:focus {
      outline: none;
    }
  }

  #edit-button {
    font-size: 1.5rem;
    color: #333;
    cursor: pointer;
  }
`;

export const NoteTitle = styled.input`
  margin: 20px 0px 0px 8px;
  grid-column: 2 / span 6;
  grid-row: 1 / span 1;
  font-size: 2rem;
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
  border-radius: 5px 15px 5px 15px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: #292929;
  }
`;
