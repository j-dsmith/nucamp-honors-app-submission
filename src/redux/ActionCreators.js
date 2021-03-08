import * as ActionTypes from "./ActionTypes";

export const addNote = (note) => ({
  type: ActionTypes.ADD_NOTE,
  payload: {
    note,
  },
});

export const deleteNote = (id) => ({
  type: ActionTypes.DELETE_NOTE,
  payload: id,
});
