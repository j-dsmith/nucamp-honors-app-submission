import React from "react";
import { SidebarCard, SidebarTray } from "./Sidebar.styles";

const TrayData = ({ notes }) => {
  return (
    <SidebarTray>
      <SidebarCard>
        <ul>
          {notes.map((note) => {
            return (
              <li key={note.id}>
                <h4>{note.title}</h4>
                <p>{note.text}</p>
              </li>
            );
          })}
        </ul>
      </SidebarCard>
    </SidebarTray>
  );
};

export default TrayData;
