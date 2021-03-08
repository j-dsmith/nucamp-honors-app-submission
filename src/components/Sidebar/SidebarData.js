import React from "react";
import * as VscIcons from "react-icons/vsc";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <VscIcons.VscHome />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <VscIcons.VscFolder />,
    submenu: [
      {
        id: 0,
        title: "project1",
      },
    ],
  },
];
