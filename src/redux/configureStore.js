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

//Per Dan Abramov - This is a way to reset state to initial on logging out that simplifies the process when multiple reducers are being utilized
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
