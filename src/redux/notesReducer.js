import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
  notes: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "blue" },
    { id: 2, text: "Build something fun!", completed: true, color: "orange" },
  ],
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case ActionTypes.DELETE_NOTE:
      const updatedNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return { ...state, notes: updatedNotes };
    default:
      return state;
  }
};

export default notesReducer;
