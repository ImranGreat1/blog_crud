import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/users/actions";
import { Link } from "react-router-dom";

function UserRegister(props) {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password1: "",
    password2: ""
  });

  //   const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const { name, username, password1, password2 } = form;

  const handleChange = e =>
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  const handleSubmit = e => {
    e.preventDefault();
    if (password1 === password2) {
      dispatch(registerUser(name, username, password1));
      console.log("calling from register component");
    } else {
      alert("Password did Not match");
    }
  };

  return (
    <div>
      <h3>Create account</h3>
      <div>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
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
            <label>Password</label>
            <input
              type="text"
              name="password1"
              value={password1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="text"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Register</button>
          </div>
          <div>
            <h6>
              Have an account?{" "}
              <small>
                <Link to="/login">login</Link>
              </small>
            </h6>
          </div>
        </form>
      </div>
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   register: (name, username, password) =>
//     dispatch(registerUser(name, username, password))
// });

// export default connect(null, mapDispatchToProps)(UserRegister);

export default UserRegister;
