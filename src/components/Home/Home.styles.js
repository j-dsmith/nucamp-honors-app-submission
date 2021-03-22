import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column: 2 / 9;
  grid-row: 1 / 9;
`;

export const StyledWidget = styled.div`
  padding: 20px;
  grid-row: 2 / span 6;
  grid-column: 2 / span 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Clock = styled.div`
  font-size: 8rem;
  font-weight: 500;
  color: #141414;
`;

export const Greeting = styled.p`
  font-size: 3.5rem;
  color: #333;
`;

export const GoalLabel = styled.label`
  font-size: 2rem;
`;
export const DailyGoal = styled.input`
  border: none;
  border-bottom: 1px solid #141414;
  background: none;
  font-size: 2rem;
  width: 60%;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
