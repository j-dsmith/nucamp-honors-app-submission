import * as ActionTypes from "./ActionTypes";

export const addNote = ({ id, title, text }) => ({
  type: ActionTypes.ADD_NOTE,
  payload: {
    id,
    title,
    text,
  },
});

export const deleteNote = (id) => ({
  type: ActionTypes.DELETE_NOTE,
  payload: id,
});
