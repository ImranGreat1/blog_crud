import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../../redux";

function PostEdit({ match, history }) {
  const dispatch = useDispatch();

  const post = useSelector(state => {
    const posts = state.posts.posts;
    const post = posts.filter(p => p.id === Number(match.params.postId))[0];
    return post;
  });

  const initialState = {
    author: post.author,
    title: post.title,
    content: post.content
  };

  const [form, setForm] = useState(initialState);

  const { author, title, content } = form;

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleClick = () => {
    if (!(title && content)) {
      alert("You should provide both title and content");
    } else {
      const id = Number(match.params.postId);
      const post = { id, author, title, content };
      dispatch(editPost(post, id));
      history.replace("/");
    }
  };
  return (
    <>
      <div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea name="content" value={content} onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleClick}>Update post</button>
        </div>
      </div>
    </>
  );
}

export default PostEdit;
