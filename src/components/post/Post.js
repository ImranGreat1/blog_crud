import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../redux";

function Post({ match, history }) {
  const postId = match.params.postId;
  const dispatch = useDispatch();
  const post = useSelector(state => {
    const filteredPost = state.posts.posts.filter(
      post => post.id === Number(postId)
    )[0];
    return filteredPost;
  });

  const users = useSelector(state => state.users.users);

  const handleDelete = () => {
    dispatch(deletePost(post.id));
    history.push("/");
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <h6>
        written by: {users.filter(user => post.author === user.id)[0].username}
      </h6>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <hr />
      <div>
        <Link to={`${match.url}/edit`}>Edit</Link>
      </div>
      <div>
        <button style={{ border: "none" }} onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
}

export default Post;
