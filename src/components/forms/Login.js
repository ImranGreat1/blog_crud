import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux";

function Login({ users, loginUser }) {
  const initialState = { username: "", password: "" };
  const [form, setForm] = useState(initialState);
  const { username, password } = form;

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
      );
      if (!authenticatedUser) {
        alert(loginError);
      } else {
        loginUser(username, password);
      }
    }
  };
  return (
    <>
      <div>
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
        <button onClick={handleClick}>Sign in</button>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  loginUser: (username, password) => dispatch(loginUser(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
