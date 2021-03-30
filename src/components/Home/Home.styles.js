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
  grid-column: 2 / 9;
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
  text-shadow: 1px 1px 4px #c2c2c2;
`;

export const Greeting = styled.p`
  font-family: "Playfair Display", "Times New Roman", Times, serif;
  text-shadow: 1px 1px 4px #ccc;
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
  width: 60%;
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
  font-size: 2rem;
  color: #333;

  .checked {
    color: #1cc4a0;
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

export const Toast = styled.div`
  background-color: #292929;
  border-radius: 15px;
  height: 150px;
  width: 250px;
  position: absolute;
  left: ${(props) => `${props.positionX}px`};
  top: ${(props) => `${props.positionY}px`};
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  color: #fcfaf9;
  margin: 20px;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOutToast : fadeInToast)} 0.3s linear;
  transition: visibility 0.2s linear;
  /* 
  &.projects-page {
    position: absolute;
    top: 20px;
    left: 500px;
  } */

  .toast-header {
    display: flex;

    justify-content: space-between;
    align-items: center;
    height: 30%;
    background-color: #292929;
    border-radius: 15px 15px 0 0;
  }

  .toast-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    background-color: #333;
    border-radius: 0 0 15px 15px;
  }

  .icon-container {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    position: absolute;
    right: 5px;
    top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding: 0;
  }

  .lightbulb-icon {
    font-size: 36px;
    margin: 10px;
    color: #fca703;
    margin: 0;
    cursor: pointer;
  }

  .close-icon {
    font-size: 26px;
    margin: 10px;
    color: #df3153;
    margin: 0;
    cursor: pointer;
    padding: 0;
  }

  h4 {
    padding: 10px;
  }

  p {
    padding: 10px;
    font-size: 0.95rem;
  }
`;

const fadeInToast = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  
  }

  to {
    transform: translateY(20px)
    opacity: 1;
  }
`;

const fadeOutToast = keyframes`
   from {
    transform: translateY(0px);
    opacity: 1;
  }

  to {
    transform: translateY(-20px);
    opacity: 0;
  }
`;
// fca703
