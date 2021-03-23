import * as ActionTypes from "./ActionTypes";

const dailyGoal = {
  dailyGoal: "",
};

export const GoalsReducer = (state = dailyGoal, action) => {
  switch (action.type) {
    case ActionTypes.ADD_GOAL:
      return { ...state, dailyGoal: action.payload };

    default:
      return state;
  }
};
