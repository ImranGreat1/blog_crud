import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux";

function PostList({ posts, authenticatedUser }) {
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
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  authenticatedUser: state.users.authenticatedUser
});

export default connect(mapStateToProps)(PostList);
