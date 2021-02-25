import * as ActionTypes from "./ActionTypes";

export const addNote = (text) => ({
  type: ActionTypes.ADD_NOTE,
  payload: {
    text,
  },
});

export const deleteNote = (id) => ({
  type: ActionTypes.DELETE_NOTE,
  payload: id,
});
