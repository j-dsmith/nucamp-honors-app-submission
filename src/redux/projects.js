import * as ActionTypes from "./ActionTypes";

export const INITIAL_STATE = {
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
      title: "Note 2",
      notes: [
        { id: 0, title: "Redux is Hard", text: "Thats all" },
        { id: 1, title: "Bucket List Goals", text: "Learn Redux" },
        { id: 2, title: "Reality?", text: "Hold keyboard and cry..." },
      ],
    },
  ],
};

export const projects = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROJECT:
      return {
        ...state,
        projects: state.projects.concat(action.payload),
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
