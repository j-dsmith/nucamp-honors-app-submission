import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { ProjectsReducer } from "./projects";
import { SelectedReducer } from "./selected";
import { GoalsReducer } from "./goals";
import { UserReducer } from "./user";
import * as ActionTypes from "./ActionTypes";

const appReducer = combineReducers({
  projects: ProjectsReducer,
  contentSelected: SelectedReducer,
  dailyGoal: GoalsReducer,
  user: UserReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ActionTypes.LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export const ConfigureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};
