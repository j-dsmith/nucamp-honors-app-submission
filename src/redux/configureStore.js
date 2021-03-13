import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import notesReducer from "./notesReducer";
import { projects } from "./projects";

export const ConfigureStore = () => {
  const store = createStore(projects, applyMiddleware(logger));
  return store;
};
