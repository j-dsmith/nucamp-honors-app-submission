import * as ActionTypes from "./ActionTypes";

export const addProject = (project) => ({
  type: ActionTypes.ADD_PROJECT,
  payload: project,
});

export const deleteProject = (id) => ({
  type: ActionTypes.DELETE_PROJECT,
  payload: id,
});

export const addNote = (note) => ({
  type: ActionTypes.ADD_NOTE,
  payload: note,
});

export const updateNote = (updatedNote) => ({
  type: ActionTypes.UPDATE_NOTE,
  payload: updatedNote,
});

export const deleteNote = (id) => ({
  type: ActionTypes.DELETE_NOTE,
  payload: id,
});

export const setContentSelected = (projectId, noteId) => ({
  type: ActionTypes.NOTE_SELECTED,
  payload: {
    projectId,
    noteId,
  },
});

export const addGoal = (goal) => ({
  type: ActionTypes.ADD_GOAL,
  payload: goal,
});
