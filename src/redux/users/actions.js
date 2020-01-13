import { REGISTER_USER, LOGIN_USER } from "./actionTypes";

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
  const loggedInUser = getState().users.users.filter(
    user => user.username === username && user.password === password
  );
  loggedInUser && dispatch({ type: LOGIN_USER, payload: loggedInUser });
};
