// import * as ActionTypes from "./ActionTypes";
// import { INITIAL_STATE } from "./projects";

// export const notes = (state = INITIAL_STATE.projects, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_NOTE:
//       const newState = state.map((project) => {
//         if (project.id === action.payload.projectId) {
//           return { ...project, notes: [...project.notes, action.payload] };
//         }
//         return project;
//       });
//       return newState;
//     default:
//       return state;
//   }
// };
