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

export const deleteNote = (projectId, noteId) => ({
  type: ActionTypes.DELETE_NOTE,
  payload: {
    projectId,
    noteId,
  },
});

export const toggleDelete = () => ({
  type: ActionTypes.TOGGLE_DELETE,
});

export const setContentSelected = (projectId, noteId) => ({
  type: ActionTypes.CONTENT_SELECTED,
  payload: {
    projectId,
    noteId,
  },
});

export const addGoal = (goal) => ({
  type: ActionTypes.ADD_GOAL,
  payload: goal,
});

export const toggleGoalComplete = () => ({
  type: ActionTypes.TOGGLE_GOAL_COMPLETE,
});

export const setAuthUser = (authorized) => ({
  type: ActionTypes.AUTH_USER,
  payload: authorized,
});

export const setCurrentUser = (user) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});

export const logout = () => ({
  type: ActionTypes.LOGOUT,
});

export const toggleTips = () => ({
  type: ActionTypes.TOGGLE_TIPS,
});
