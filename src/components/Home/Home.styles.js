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

const FadeInHome = ({
  duration = 400,
  delay = 100,
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
  grid-row: 2 / span 6;
  grid-column: 2 / span 6;
`;
export default FadeInHome;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column: 1 / 9;
  grid-row: 1 / 9;
`;

export const StyledWidget = styled.div`
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .fade-out {
    opacity: 0;
  }

  .fade-in {
    opacity: 1;
  }
`;

export const Clock = styled.div`
  font-size: 10rem;
  font-weight: 500;
  color: #141414;
  text-shadow: 1px 1px 6px #c2c2c2;
`;

export const Greeting = styled.p`
  font-family: "Playfair Display", "Times New Roman", Times, serif;
  text-shadow: 1px 1px 6px #ccc;
  font-size: 4.5rem;
  font-weight: bold;
  color: #292929;
`;

export const GoalLabel = styled.label`
  font-size: 2.75rem;
  font-weight: bold;
  color: #1cc4a0;
  opacity: 1;
  transition: 0.3s ease;
`;
export const DailyGoal = styled.input`
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #141414;
  background: none;
  font-size: 2rem;
  width: 30%;
  text-align: center;
  opacity: 1;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
`;

//styling for custom checkbox from (https://moderncss.dev/pure-css-custom-checkbox-style/)
export const GoalCheckbox = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 3rem;
  color: #333;

  .checked {
    color: #1cc4a0;
    text-decoration: line-through;
    font-style: italic;
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
    transform: translateY(0.3em);

    svg {
      transition: transform 0.1s ease-in 25ms;
      transform: scale(0);
      transform-origin: bottom left;
    }
  }

  .checkbox-control.checked {
    border: 0.1em solid #1cc4a0;
  }

  input:checked + .checkbox-control svg {
    transform: scale(1);
  }
`;

export const InfoWidget = styled.div`
  grid-column: 7 / span 2;
  grid-row: 1 / span 1;
  display: flex;
  align-items: top;
  justify-content: flex-end;

  div {
    padding: 5px;
    margin: 15px;
    color: #333;
    border-radius: 15px;
    height: 60px;
    display: flex;
    align-items: top;
    justify-content: center;
  }
  .info-widget-clock {
    font-weight: bold;
    font-size: 1.25rem;
    text-shadow: 1px 1px 6px #ccc;
  }

  .info-widget-goal {
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.125rem;

    h4 {
      text-shadow: 1px 1px 6px #ccc;
    }

    p {
      text-align: center;
    }

    p.checked {
      color: #1cc4a0;
      text-decoration: line-through;
      font-style: italic;
    }
  }
`;
