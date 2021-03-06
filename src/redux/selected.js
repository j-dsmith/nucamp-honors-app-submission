import * as ActionTypes from "./ActionTypes";

const contentSelected = {
  isNoteSelected: false,
  projectSelectedId: null,
  noteSelectedId: null,
};

export const SelectedReducer = (state = contentSelected, action) => {
  switch (action.type) {
    case ActionTypes.CONTENT_SELECTED:
      const noteSelected = action.payload.noteId ? true : false;
      return {
        ...state,
        isNoteSelected: noteSelected,
        projectSelectedId: action.payload.projectId,
        noteSelectedId: action.payload.noteId,
      };
    case ActionTypes.DELETE_NOTE:
      return { ...state, isNoteSelected: false };

    default:
      return state;
  }
};
