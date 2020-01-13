import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import Container from "./components/Container";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello World Blog</h1>
        <Container />
      </div>
    </Provider>
  );
}

export default App;
