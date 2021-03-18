import React from "react";
import Main from "./components/Main";
import GlobalStyle from "./globalStyles";
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
