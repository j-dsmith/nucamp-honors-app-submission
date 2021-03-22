import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { ProjectsReducer } from "./projects";
import { SelectedReducer } from "./selected";
import { GoalsReducer } from "./goals";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      projects: ProjectsReducer,
      contentSelected: SelectedReducer,
      goals: GoalsReducer,
    }),
    applyMiddleware(logger)
  );
  return store;
};
