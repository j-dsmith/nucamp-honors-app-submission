import * as ActionTypes from "./ActionTypes";

const dailyGoal = {
  dailyGoal: "",
  goalComplete: false,
};

export const GoalsReducer = (state = dailyGoal, action) => {
  switch (action.type) {
    case ActionTypes.ADD_GOAL:
      return { ...state, dailyGoal: action.payload };

    case ActionTypes.TOGGLE_GOAL_COMPLETE:
      return { ...state, goalComplete: !state.goalComplete };
    default:
      return state;
  }
};
