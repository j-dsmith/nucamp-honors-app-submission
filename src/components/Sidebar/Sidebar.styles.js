import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  grid-row: 1 / span 8;
  grid-column: 1 / span 1;
  position: relative;
`;

export const SidebarSection = styled.div`
  height: ${100 / 3}%;
  padding: 0;
  display: flex;
  flex-direction: column;

  .slider-label {
    color: #ccc;
    position: absolute;
    left: 170px;
    top: 785px;
  }
`;

export const StyledSidebar = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 250px;
  background-color: #292929;
  border-radius: 0px 15px 15px 0px;
  transition: all 0.5s ease;
  //box shadow from css-tricks.com
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  #sidebar-data {
    border-top: 1px solid #3d3d3d;
    border-bottom: 1px solid #3d3d3d;
    justify-content: center;
  }
`;

export const StyledTray = styled.div`
  position: absolute;
  transform: translateX(-100%);
  background-color: #474747;
  z-index: 0;
  border-radius: 15px;
  width: 300px;
  height: 100%;
  transition: all 0.3s ease;
  padding: 15px 0 15px 25px;

  h2 {
    margin: 10px;
    padding-left: 10px;
    color: #fcfaf9;
    display: inline-block;
    text-shadow: 1px 1px 4px #292929;
  }

  &.tray-active {
    transform: translateX(75%);
  }
`;

export const TrayHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SidebarItem = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${100 / 3}%;
  padding: 0px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1f1f1f;
  }
`;

export const SidebarLabel = styled.div`
  color: rgba(252, 250, 249, 0.85);
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 60%;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(252, 250, 249, 1);
  }
`;

export const SidebarIcon = styled.div`
  color: #fcfaf9;
  font-size: 1.5rem;
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarCard = styled.div`
  background-color: #333;
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 10px 6px -6px #333;

  ul {
    list-style-type: none;

    li {
      padding: 10px;
      border-bottom: 1px solid #3d3d3d;
      color: #fcfaf9;
      cursor: pointer;
      transition: (background-color, color) 0.2s ease;

      &:hover {
        background-color: #292929;

        #arrow-right {
          opacity: 1;
          transform: translateX(0);

          //add translate for arrow to slide right as it becomes visible
        }

        #x-icon-right {
          opacity: 1;
        }
      }

      p {
        color: rgba(252, 250, 249, 0.85);
        font-size: 0.85rem;
      }

      .list-icon {
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        color: #48e5c2;
      }

      .list-icon.minus {
        color: #df3153;
      }

      .project-list-item {
        display: flex;
        align-content: center;
        justify-content: space-between;
      }

      .project-list-title {
        font-size: 1rem;
        margin-left: 20px;
        margin-right: auto;
      }

      .notes-list-item {
        display: flex;
        align-content: center;
        justify-content: flex-start;
      }

      .notes-list-title {
        font-size: 1rem;
      }

      .notes-list-content {
        margin-left: 20px;
      }

      .note-list-summary {
        font-size: 0.85rem;
        text-decoration: none;
      }

      .selected-note {
        opacity: 1;
      }

      #creation-date {
        font-size: 0.75rem;
      }

      #arrow-right {
        color: #fcfaf9;
        transition: all 0.4s ease;
        opacity: 0;
        transform: translateX(-10px);
      }

      #x-icon-right {
        color: #df3153;
        transition: all 0.4s ease;
        opacity: 0;
        margin-left: auto;
      }

      #selected-icon-container {
        margin-left: auto;
      }

      #selected-dot {
        height: 8px;
        width: 8px;
        border-radius: 50%;
        background-color: #48e5c2;
        justify-self: center;
        opacity: 0.85;
        transition: all 0.2s ease;
      }
    }

    li.delete-active {
      background-color: #fcfaf9;
      transition: backround-color 0.2s ease-in-out;
      color: #292929;

      p {
        color: #292929;
      }
    }

    li.active-note {
      background-color: #48e5c2;
    }

    li:first-child {
      border-radius: 15px 15px 0 0;
    }

    li:last-child {
      border-radius: 0 0 15px 15px;
    }

    li:only-child {
      border-radius: 15px;
    }
  }

  .note-text {
    font-size: 0.8rem;
  }
`;

export const NewBtn = styled.div`
  border-radius: 50%;
  /* border: 1px solid #000; */
  margin: 15px 10px 10px 0;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.deletedActive ? "#df3153" : "none")};
  transition: background-color 0.3s ease;
  cursor: pointer;

  .add-item {
    display: inline-block;
    line-height: 30px;
    color: #48e5c2;
    font-size: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .delete-item {
    display: inline-block;
    line-height: 30px;
    color: ${(props) => (props.deletedActive ? "#fcfaf9" : "#48e5c2")};
    font-size: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .trash-icon-btn {
    color: #fcfaf9;
    background-color: #df3153;
  }

  &:hover {
    background-color: ${(props) => (props.deletedActive ? "none" : "#292929")};
    box-shadow: 0 10px 6px -6px #333;
  }
`;

export const LogoutBtn = styled.button`
  margin: auto 15px 15px 15px;
  height: 60px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background: #48e5c2;
  color: #292929;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 10px 6px -6px #0a0a0a;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #82edd6;
  }

  #logout-icon {
    margin: 0 5px;
  }
`;

export const NewItemInput = styled.input`
  border-radius: 15px;
  border: none;
  margin: 10px;
  padding: 10px;
  background: #333;
  height: 30px;
  width: 70%;
  color: #fcfaf9;

  &:focus {
    outline: none;
    background-color: #292929;
  }
`;
