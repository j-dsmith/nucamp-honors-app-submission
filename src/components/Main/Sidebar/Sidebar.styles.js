import styled from "styled-components";

export const StyledSidebar = styled.div`
  margin: 10px;
  background-color: #333;
  grid-row: 2 / span 6;
  grid-column: 1 / span 2;
  border-radius: 15px;
  transition: all 0.5s ease;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.01);
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  padding: 0px;
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