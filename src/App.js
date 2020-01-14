import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Login from "./components/forms/Login";
import UserRegister from "./components/forms/UserRegister";
import PostList from "./components/post/PostList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <PostList />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <UserRegister />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
