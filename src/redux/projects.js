import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
  projects: [
    {
      id: 0,
      title: "First Project",
      notes: [
        { id: 0, title: "Todo 1", text: "Learn React" },
        { id: 1, title: "Todo 2", text: "Learn Redux" },
        { id: 2, title: "Then What?", text: "Build something fun!" },
      ],
    },
    {
      id: 1,
      title: "Numba 2",
      notes: [
        { id: 0, title: "Mans Not Hot", text: "Boom" },
        { id: 1, title: "Skrr pop pop", text: "Learn Redux" },
        { id: 2, title: "Take of yuh jacket", text: "babes, mans not hot" },
      ],
    },
  ],
};

export const projects = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case ActionTypes.DELETE_PROJECT:
      const updatedProjects = state.projects.filter(
        (project) => project.id !== action.payload
      );
      return { ...state, projects: updatedProjects };
    default:
      return state;
  }
};
