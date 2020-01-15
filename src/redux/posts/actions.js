import { CREATE_POST } from "./actionTypes";

export const createPost = post => (dispatch, getState) => {
  const id = getState().posts.posts.length + 1;
  const newPost = { id, ...post };

  dispatch({
    type: CREATE_POST,
    payload: newPost
  });
};
