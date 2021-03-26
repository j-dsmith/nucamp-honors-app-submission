import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { ProjectsReducer } from "./projects";
import { SelectedReducer } from "./selected";
import { GoalsReducer } from "./goals";
import { UserReducer } from "./userReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      projects: ProjectsReducer,
      contentSelected: SelectedReducer,
      dailyGoal: GoalsReducer,
      user: UserReducer,
    }),
    applyMiddleware(logger)
  );
  return store;
};
