import { REGISTER_USER, LOGIN_USER } from "./actionTypes";

// const initialUsers
const initialState = {
  users: [
    { id: 1, name: "Imran", username: "Jege", password: "Brcln10." },
    { id: 2, name: "Zahradeen", username: "Zeeboy", password: "zeeboy10" },
    { id: 3, name: "Mujaheed", username: "Boss", password: "boss1" }
  ],
  loggedInUser: null
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
        loggedInUser: action.payload
      };
    default:
      return state;
  }
}
