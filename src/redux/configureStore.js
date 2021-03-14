import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import notesReducer from "./notesReducer";
import { projects } from "./projects";
import { notes } from "./notes";
import { trayVisible } from "./trayTypeVisible";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      projects: projects,
      notes: notes,
      trayVisible: trayVisible,
    }),
    applyMiddleware(logger)
  );
  return store;
};
