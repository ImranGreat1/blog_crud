import { CREATE_POST, EDIT_POST, DELETE_POST } from "./actionTypes";

// Create post
export const createPost = post => (dispatch, getState) => {
  const id = getState().posts.posts.length + 1;
  const newPost = { id, ...post };

  dispatch({
    type: CREATE_POST,
    payload: newPost
  });
};

// Edit post
export const editPost = (editedPost, postId) => dispatch =>
  dispatch({
    type: EDIT_POST,
    payload: { editedPost, postId }
  });

// Delete post

export const deletePost = id => dispatch =>
  dispatch({
    type: DELETE_POST,
    payload: id
  });
