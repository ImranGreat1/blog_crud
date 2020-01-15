import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/forms/Login";
import UserRegister from "./components/forms/UserRegister";
import PostList from "./components/post/PostList";
import PostForm from "./components/forms/PostForm";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={PostList} />
          <PrivateRoute path="/create-post" component={PostForm} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <UserRegister />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
