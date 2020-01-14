import React from "react";
import { connect } from "react-redux";

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps)(PostList);
