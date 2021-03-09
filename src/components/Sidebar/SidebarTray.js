import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import { SidebarCard, SidebarTray } from "./Sidebar.styles";

const TrayData = ({ notes }) => {
  return (
    <SidebarTray>
      <h2>Notes</h2>
      <SidebarCard>
        <ul>
          {notes.map((note) => {
            return (
              <li key={note.id}>
                <h4>{note.title}</h4>
                <p>{ReactHtmlParser(note.text)}</p>
              </li>
            );
          })}
        </ul>
      </SidebarCard>
    </SidebarTray>
  );
};

export default TrayData;
