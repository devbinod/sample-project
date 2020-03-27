import { PostState } from "./types/post";
import { AnyAction } from "redux";
import { SET_ALL_POST, SET_SINGLE_POST } from "../actions/post";

export const initialState: PostState = {
  post: {
    title: "",
    description: "",
    postType: "Text Post",
    published: false,
    videoUrl: "",
    createdAt: undefined
  },
  posts: []
};

export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ALL_POST: {
      return { ...state, posts: action.payload };
    }

    case SET_SINGLE_POST: {
      console.log("called.......here single");
      return { ...state, posts: state.posts.push(action.payload) };
    }
    default:
      return state;
  }
};
