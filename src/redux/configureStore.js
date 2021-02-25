import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import notesReducer from "./notesReducer";

export const ConfigureStore = () => {
  const store = createStore(notesReducer, applyMiddleware(logger));
  return store;
};
