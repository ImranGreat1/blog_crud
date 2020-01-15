import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./actionTypes";

// const initialUsers
const initialState = {
  users: [
    { id: 1, name: "Imran", username: "Jege", password: "Brcln10." },
    { id: 2, name: "Zahradeen", username: "Zeeboy", password: "zeeboy10" },
    { id: 3, name: "Mujaheed", username: "Boss", password: "boss1" }
  ],
  authenticatedUser: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case LOGIN_USER:
      return {
        ...state,
        authenticatedUser: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        authenticatedUser: null
      };
    default:
      return state;
  }
}
