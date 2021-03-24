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
  font-size: 10rem;
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
  padding-bottom: 5px;
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

//styling for custom checkbox from (https://moderncss.dev/pure-css-custom-checkbox-style/)
export const GoalCheckbox = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 2rem;
  color: #333;

  .checked {
    color: #707070;
    text-decoration: line-through;
  }

  .checkbox-input {
    display: grid;
    grid-template-areas: "checkbox";

    > * {
      grid-area: checkbox;
    }

    input {
      opacity: 0;
      height: 1em;
      width: 1em;
    }
  }

  .checkbox-control {
    display: inline-grid;
    height: 1em;
    width: 1em;
    border-radius: 0.25em;
    border: 0.1em solid #333;
    transform: translateY(0.35em);

    svg {
      transition: transform 0.1s ease-in 25ms;
      transform: scale(0);
      transform-origin: bottom left;
    }
  }

  .checkbox-control.checked {
    border: 0.1em solid #707070;
  }

  .label {
  }

  input:checked + .checkbox-control svg {
    transform: scale(1);
  }
`;
