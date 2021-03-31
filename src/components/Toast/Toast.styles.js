import styled, { keyframes } from "styled-components";

export const Toast = styled.div`
  margin: 20px;
  background-color: #292929;
  border-radius: 15px;
  height: 150px;
  width: 250px;
  position: absolute;
  left: ${(props) => `${props.positionX}px`};
  top: ${(props) => `${props.positionY}px`};
  z-index: 10;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  color: #fcfaf9;
  visibility: ${(props) => (props.out ? "hidden" : "visible")};
  animation: ${(props) => (props.out ? fadeOutToast : fadeInToast)} 0.3s linear;
  transition: visibility 0.2s linear;

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

export const Slider = styled.label`
  margin-top: 25px;
  position: absolute;
  display: inline-block;
  width: 55px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #474747;
    transition: 0.4s;
    box-shadow: 0 10px 6px -6px #0a0a0a;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #fca703;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #0a0a0a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
