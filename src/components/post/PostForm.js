import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../redux";
import { useHistory } from "react-router-dom";

function PostForm() {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector(
    state => state.users.authenticatedUser.id
  );
  const history = useHistory();
  const initialState = { author: authenticatedUser, title: "", content: "" };
  const [form, setForm] = useState(initialState);

  const { author, title, content } = form;

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleClick = () => {
    if (!(title && content)) {
      alert("You should provide both title and content");
    } else {
      const post = { author, title, content };
      dispatch(createPost(post));
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
          <button onClick={handleClick}>Create post</button>
        </div>
      </div>
    </>
  );
}

export default PostForm;
