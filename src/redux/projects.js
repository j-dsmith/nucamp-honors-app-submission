import * as ActionTypes from "./ActionTypes";

const projects = [
  {
    projectId: 1,
    title: "First Project",
    notes: [
      { id: 0, title: "Todo 1", text: "Learn React" },
      { id: 1, title: "Todo 2", text: "Learn Redux" },
      { id: 2, title: "Then What?", text: "Build something fun!" },
    ],
  },
  {
    projectId: 2,
    title: "Project 2",
    notes: [
      { id: 0, title: "Redux is Hard", text: "Thats all" },
      { id: 1, title: "Bucket List Goals", text: "Learn Redux" },
      { id: 2, title: "Reality?", text: "Hold keyboard and cry..." },
    ],
  },
];

export const projectsReducer = (state = projects, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROJECT:
      return [...state, action.payload];

    case ActionTypes.DELETE_PROJECT:
      const updatedProjects = state.filter(
        (project) => project.id !== action.payload
      );
      return { ...state, projects: updatedProjects };

    case ActionTypes.ADD_NOTE:
      const newState = state.map((project) => {
        if (project.projectId === action.payload.projectId) {
          console.log(project);
          return { ...project, notes: project.notes.concat(action.payload) };
        }
        return project;
      });
      return newState;
    default:
      return state;
  }
};

export default projectsReducer;
