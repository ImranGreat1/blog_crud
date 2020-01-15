import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./actionTypes";

export const registerUser = (name, username, password) => (
  dispatch,
  getState
) => {
  console.log("Idea");

  const id = getState().users.users.length + 1;

  //   const id = 5;
  const registeredUser = { id, name, username, password };
  dispatch({
    type: REGISTER_USER,
    payload: registeredUser
  });
};

export const loginUser = (username, password) => (dispatch, getState) => {
  const authenticatedUser = getState().users.users.filter(
    user => user.username === username && user.password === password
  )[0];
  authenticatedUser &&
    dispatch({ type: LOGIN_USER, payload: authenticatedUser });
};

export const logoutUser = () => dispatch =>
  dispatch({
    type: LOGOUT_USER
  });
