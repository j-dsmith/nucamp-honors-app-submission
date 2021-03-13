// import * as ActionTypes from "./ActionTypes";

// const notesReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ActionTypes.ADD_NOTE:
//       return {
//         ...state,
//         notes: [...state.notes, action.payload],
//       };
//     case ActionTypes.DELETE_NOTE:
//       //check if each note matches current note by id
//       //if note, return it in new array
//       //note to be deleted will be left out - aka deleted
//       const updatedNotes = state.notes.filter(
//         (note) => note.id !== action.payload
//       );
//       return { ...state, notes: updatedNotes };
//     default:
//       return state;
//   }
// };

// export default notesReducer;
