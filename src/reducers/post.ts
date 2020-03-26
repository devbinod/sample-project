import { PostState } from "./types/post";
import { AnyAction } from "redux";
import { SET_ALL_POST } from "../actions/post";

export const initialState: PostState = {
  post: {
    title: "",
    description: "",
    postType: "",
    published: false,
    videoUrl: "",
    createdAt: undefined
  },
  posts: []
};

export const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ALL_POST: {
      return { ...state, posts: [action.payload] };
    }
    default:
      return state;
  }
};
