import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./components/forms/Login";
import UserRegister from "./components/forms/UserRegister";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/">
          <UserRegister />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
