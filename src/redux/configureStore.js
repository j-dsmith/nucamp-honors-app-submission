import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { projectsReducer } from "./projects";
import { notes } from "./notes";

export const ConfigureStore = () => {
  const store = createStore(projectsReducer, applyMiddleware(logger));
  return store;
};
