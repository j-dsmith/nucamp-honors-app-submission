import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
  projects: [
    {
      projectId: 1,
      title: "First Project",
      notes: [
        {
          noteId: 1,
          title: "Todo 1",
          text: "Learn React",
          dateCreated: new Date(2019, 9, 5).toLocaleDateString(),
        },
        {
          noteId: 2,
          title: "Todo 2",
          text: "Learn Redux",
          dateCreated: new Date(2021, 2, 2).toLocaleDateString(),
        },
        {
          noteId: 3,
          title: "Then What?",
          text: "Build something fun!",
          dateCreated: new Date(2020, 6, 8).toLocaleDateString(),
        },
      ],
    },
    {
      projectId: 2,
      title: "Project 2",
      notes: [
        {
          noteId: 1,
          title: "Redux is Hard",
          text: "Thats all",
          dateCreated: new Date(2018, 11, 24).toLocaleDateString(),
        },
        {
          noteId: 2,
          title: "Bucket List Goals",
          text: "Learn Redux",
          dateCreated: new Date(2020, 1, 4).toLocaleDateString(),
        },
        {
          noteId: 3,
          title: "Reality?",
          text: "Hold keyboard and cry...",
          dateCreated: new Date(2021, 2, 28).toLocaleDateString(),
        },
      ],
    },
  ],
  deleted: {
    deleteActive: false,
    deletedNotes: [],
  },
};

export const ProjectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PROJECT:
      return { ...state, projects: state.projects.concat(action.payload) };

    case ActionTypes.ADD_NOTE:
      //find project matching action.payload.projectId in projects state
      const newProjectState = state.projects.map((project) => {
        if (project.projectId === action.payload.projectId) {
          //if the project matches update notes array in selected project with new note
          return { ...project, notes: project.notes.concat(action.payload) };
        }
        return project;
      });
      return { ...state, projects: newProjectState };

    case ActionTypes.TOGGLE_DELETE:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          deleteActive: !state.deleted.deleteActive,
        },
      };

    case ActionTypes.DELETE_PROJECT:
      //action payload contains note id to be deleted, find matching project in state
      const deletedProject = state.projects.find(
        (project) => project.projectId === action.payload
      );
      //"delete" project matching action.payload by filtering new array from all unmatching project ids - effectively leaves out or deletes the project matching payload
      const updatedProjects = state.projects.filter(
        (project) => project.projectId !== action.payload
      );

      //pull notes out of deleted project and add to deleted notes array
      //this step saves nested mapping issue in component
      const deletedProjectNotes = deletedProject.notes.map((note) => note);

      return {
        ...state,
        projects: updatedProjects,
        deleted: {
          ...state.deleted,
          deleteActive: true,
          deletedNotes: state.deleted.deletedNotes.concat(
            ...deletedProjectNotes
          ),
        },
      };

    case ActionTypes.DELETE_NOTE:
      //find note being deleted so it can be added to deleted notes array
      const deletedNote = state.projects
        .find((project) => project.projectId === action.payload.projectId)
        .notes.find((note) => note.noteId === action.payload.noteId);

      //find project matching action.payload.projectId in projects state
      const newDeletedState = state.projects.map((project) => {
        if (project.projectId === action.payload.projectId) {
          //if match is found, filter notes array of selected project to include all but note matching
          //action.payload.noteId, effectively deleting note
          return {
            ...project,
            notes: project.notes.filter(
              (note) => note.noteId !== action.payload.noteId
            ),
          };
        }
        return project;
      });
      return {
        ...state,
        projects: newDeletedState,
        deleted: {
          ...state.deleted,
          deletedNotes: state.deleted.deletedNotes.concat(deletedNote),
        },
      };

    case ActionTypes.UPDATE_NOTE:
      //get current project from projects by matching payload project id
      const currentProject = state.projects.find(
        (project) => project.projectId === action.payload.projectId
      );
      //get current note from current project by matching payload note id
      const currentNote = currentProject.notes.find(
        (note) => note.noteId === action.payload.noteId
      );

      //map through projects, if a project matches current project -> return new copy with notes array modified
      const updatedProjectState = state.projects.map((project) => {
        if (project.projectId === currentProject.projectId) {
          return {
            ...project,
            //modify notes array by mapping and finding matching id like above, if match found return new note obj with payload spread in
            notes: project.notes.map((note) => {
              if (note.noteId === currentNote.noteId) {
                return { ...note, ...action.payload };
              }
              //no match found, return the note unmodified
              return note;
            }),
          };
        }
        //no match found, return the project unmodified
        return project;
      });
      //after updates, return the state, set content selected to true so note remains rendered, return updated projects with note modified from above
      return {
        ...state,
        contentSelected: { ...state.contentSelected, isNoteSelected: true },
        projects: [...updatedProjectState],
      };

    default:
      return state;
  }
};
