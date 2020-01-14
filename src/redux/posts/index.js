import { CREATE_POST, DELETE_POST } from "./actionTypes";

const initialPosts = [
  {
    id: 1,
    author: 1,
    title: "Hello world title",
    content: "This is my hello world content"
  },
  {
    id: 2,
    author: 1,
    title: "My name is Imran",
    content: "I am learning javascript and react"
  },
  {
    id: 3,
    author: 1,
    title: "What is programming?",
    content: "Programming is fun and challenging"
  }
];
const initialState = {
  posts: initialPosts
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case DELETE_POST:
      const updatedPosts = state.posts.filter(
        post => post.id !== action.payload
      );
      return {
        ...state,
        posts: updatedPosts
      };
    default:
      return state;
  }
}
