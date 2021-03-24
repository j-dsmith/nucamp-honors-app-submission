import styled from "styled-components";

export const TrashHeading = styled.h2`
  margin: 20px 0px 0px 8px;
  grid-column: 3 / span 5;
  grid-row: 1 / span 1;
  font-size: 3rem;
  color: #333;
  padding: 0;
  align-content: center;
  display: flex;
  justify-content: space-between;
`;

export const TrashContainer = styled.div`
  padding: 10px;
  background: #f9e8dd;
  border-radius: 15px;
  grid-column: 3 / 8;
  grid-row: 2 / 8;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const DeletedNote = styled.div`
  height: 100px;
  width: 80px;
  border-radius: 15px;
  background-color: #eb6583;
  font-size: 2rem;
  font-weight: bold;
  color: #a5234a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeletedTitle = styled.h4`
  font-size: 0.85rem;
  color: #fcfaf9;
  margin-top: 10px;
`;

export const DeletedContent = styled.div`
  margin: 10px 20px;
  padding: 10px 20px;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: #333;

  .date {
    color: #ccc;
    font-size: 0.75rem;
    font-style: italic;
  }
  .untitled {
    color: #e0e0e0;
    font-style: italic;
  }
`;
