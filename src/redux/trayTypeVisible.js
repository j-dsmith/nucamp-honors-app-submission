import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
  active: false,
  showProjects: false,
  showNotes: false,
};

export const trayVisible = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_TRAY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
