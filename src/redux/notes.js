import * as ActionTypes from "./ActionTypes";
import { INITIAL_STATE } from "./projects";

export const notes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTE:
      //use selectedproject id to find matching project and update its notes array
      return { ...state, projects: state.projects.concat(updatedProject) };
    default:
      return state;
  }
};
