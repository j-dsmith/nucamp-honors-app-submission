import styled from "styled-components";

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
`;

export const StyledSidebar = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 250px;
  background-color: #333;
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
  background-color: #5e5e5e;
  z-index: 0;
  border-radius: 15px;
  width: 300px;
  height: 100%;
  transition: all 0.3s ease;
  padding-left: 25px;

  h2 {
    margin: 10px;
    padding-left: 10px;
    color: #1f1f1f;
    display: inline-block;
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

export const SidebarItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${100 / 3}%;
  padding: 0px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #292929;
  }
`;

export const SidebarLabel = styled.div`
  color: rgba(252, 250, 249, 0.85);
  font-size: 1.25rem;
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

  ul {
    list-style-type: none;

    li {
      padding: 10px;
      border-bottom: 1px solid #5e5e5e;
      color: #fcfaf9;
      cursor: pointer;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #292929;

        #arrow-right {
          opacity: 1;
          transform: translateX(0);

          //add translate for arrow to slide right as it becomes visible
        }
      }

      p {
        //truncate display of content to one line
        //! study before submission - add to notes for understanding/explanation
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgba(252, 250, 249, 0.85);
        font-size: 0.85rem;
      }

      .project-list-item {
        display: flex;
        align-content: center;
        justify-content: space-between;
      }

      .notes-list-item {
        display: flex;
        align-content: center;
        justify-content: flex-start;
      }

      .notes-list-content {
        margin-left: 20px;
      }

      .list-icon {
        font-size: 1.25rem;
        /* margin: 0 20px 0 15px; */
        display: flex;
        align-items: center;
        color: #48e5c2;
      }

      .project-list-title {
        font-size: 1rem;
        margin-left: 20px;
        margin-right: auto;
      }

      .notes-list-title {
        font-size: 1rem;
      }

      .note-list-summary {
        font-size: 0.85rem;
        text-decoration: none;
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
  }
`;

export const NewBtn = styled.div`
  border-radius: 100%;
  border: 1px solid #333;
  padding-top: 5px;
  margin: 15px 10px 10px 0;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  .add-item {
    display: inline-block;
    color: #48e5c2;
    font-size: 1rem;
  }

  &:hover {
    background: #333;
  }
`;

export const NewItemInput = styled.input`
  border-radius: 15px;
  border: none;
  margin: 10px;
  padding: 10px;
  background: #333;
  height: 30px;
  width: 80%;
  color: #fcfaf9;

  &:focus {
    outline: none;
    background-color: #292929;
  }
`;
