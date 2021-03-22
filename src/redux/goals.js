import * as ActionTypes from "./ActionTypes";

export const GoalsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_GOAL:
      return [...state, action.payload];

    default:
      return state;
  }
};
