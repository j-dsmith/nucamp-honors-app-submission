import React from "react";
import Main from "./components/Main";
import GlobalStyle from "./globalStyles";
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
}

export default App;
