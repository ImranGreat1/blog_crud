import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Post({ match }) {
  const postId = match.params.postId;
  const post = useSelector(state => {
    const filteredPost = state.posts.posts.filter(
      post => post.id === Number(postId)
    )[0];
    return filteredPost;
  });

  const users = useSelector(state => state.users.users);

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
    </div>
  );
}

export default Post;
