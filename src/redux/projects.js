import { deleteProject } from "./ActionCreators";
import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
  projects: [
    {
      projectId: 1,
      title: "First Project",
      notes: [
        { noteId: 1, title: "Todo 1", text: "Learn React" },
        { noteId: 2, title: "Todo 2", text: "Learn Redux" },
        { noteId: 3, title: "Then What?", text: "Build something fun!" },
      ],
    },
    {
      projectId: 2,
      title: "Project 2",
      notes: [
        { noteId: 1, title: "Redux is Hard", text: "Thats all" },
        { noteId: 2, title: "Bucket List Goals", text: "Learn Redux" },
        { noteId: 3, title: "Reality?", text: "Hold keyboard and cry..." },
      ],
    },
  ],
  deleted: [],
  contentSelected: {
    isNoteSelected: false,
    projectSelectedId: null,
    noteSelectedId: null,
  },
};

export const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROJECT:
      return { ...state, projects: state.projects.concat(action.payload) };

    case ActionTypes.DELETE_PROJECT:
      const deletedProject = state.projects.filter(
        (project) => project.projectId === action.payload
      );
      const updatedProjects = state.projects.filter(
        (project) => project.projectId !== action.payload
      );
      console.log(deletedProject, updatedProjects);
      return {
        ...state,
        projects: updatedProjects,
        deleted: state.deleted.concat(deletedProject),
      };

    case ActionTypes.ADD_NOTE:
      const newProjectState = state.projects.map((project) => {
        if (project.projectId === action.payload.projectId) {
          return { ...project, notes: project.notes.concat(action.payload) };
        }
        return project;
      });
      return { ...state, projects: newProjectState };

    case ActionTypes.UPDATE_NOTE:
      const currentProject = state.projects.find(
        (project) => project.projectId === action.payload.projectId
      );
      const currentNote = currentProject.notes.find(
        (note) => note.noteId === action.payload.noteId
      );

      const updatedProjectState = state.projects.map((project) => {
        if (project.projectId === currentProject.projectId) {
          return {
            ...project,
            notes: project.notes.map((note) => {
              if (note.noteId === currentNote.noteId) {
                return { ...note, ...action.payload };
              }
              return note;
            }),
          };
        }
        return project;
      });
      return {
        ...state,
        contentSelected: { ...state.contentSelected, isNoteSelected: true },
        projects: [...updatedProjectState],
      };

    case ActionTypes.NOTE_SELECTED:
      const noteSelected = action.payload.noteId ? true : false;
      return {
        ...state,
        contentSelected: {
          ...state.contentSelected,
          isNoteSelected: noteSelected,
          projectSelectedId: action.payload.projectId,
          noteSelectedId: action.payload.noteId,
        },
      };

    default:
      return state;
  }
};

export default projectsReducer;
