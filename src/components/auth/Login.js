import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux";
import { Link, useHistory, Redirect } from "react-router-dom";

function Login({ users, loginUser, authenticatedUser }) {
  const initialState = { username: "", password: "" };
  const [form, setForm] = useState(initialState);
  const { username, password } = form;
  const history = useHistory();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleClick = () => {
    const loginError = "Username/Password is not correct!";
    if (!(username && password)) {
      alert(loginError);
    } else {
      // Authenticating user
      const authenticatedUser = users.filter(
        user => user.username === username && user.password === password
      )[0];
      if (!authenticatedUser) {
        alert(loginError);
      } else {
        loginUser(username, password);
        history.replace("/");
      }
    }
  };

  if (authenticatedUser) return <Redirect to="/" />;

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleClick}>Sign in</button>
        </div>
        <div>
          <h6>
            Need an account?{" "}
            <small>
              <Link to="/register">Register</Link>
            </small>
          </h6>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  users: state.users.users,
  authenticatedUser: state.users.authenticatedUser
});

const mapDispatchToProps = dispatch => ({
  loginUser: (username, password) => dispatch(loginUser(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
