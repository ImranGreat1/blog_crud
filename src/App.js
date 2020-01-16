import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import PrivateRoute from "./components/common/PrivateRoute";
import Login from "./components/auth/Login";
import UserRegister from "./components/auth/UserRegister";
import PostList from "./components/post/PostList";
import Post from "./components/post/Post";
import PostForm from "./components/post/PostForm";
import PostEdit from "./components/post/PostEdit";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={PostList} />

          <PrivateRoute path="/create-post" component={PostForm} />
          <PrivateRoute exact path="/posts/:postId" component={Post} />
          <PrivateRoute path="/posts/:postId/edit" component={PostEdit} />
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
