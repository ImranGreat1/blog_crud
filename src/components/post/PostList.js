import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux";

function PostList({ posts, authenticatedUser, users }) {
  const dispatch = useDispatch();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/create-post">Create Post</Link>
          </li>
          <li>
            <button onClick={() => dispatch(logoutUser())}>Logout</button>
          </li>
        </ul>
        <h3>{authenticatedUser.username}</h3>
      </nav>
      {posts.map(post => (
        <div key={post.id}>
          <h6>
            Written by:{" "}
            {users.filter(user => post.author === user.id)[0].username}
          </h6>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <hr />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  authenticatedUser: state.users.authenticatedUser,
  users: state.users.users
});

export default connect(mapStateToProps)(PostList);
