import { PostState, Post } from "../reducers/types/post";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import axios from "axios";
import { mockPost } from "../reducers/mock/post";

export const SET_SINGLE_POST = "@posts/SET_SINGLE_POST";
export const SET_ALL_POST = "@posts/SET_ALL_POST";

export type SetSinglePost = {
  type: typeof SET_SINGLE_POST;
  payload: Post;
};

export type SetAllPost = {
  type: typeof SET_ALL_POST;
  payload: Array<Post>;
};

export const setPost = (post: Post): SetSinglePost => {
  return {
    type: SET_SINGLE_POST,
    payload: post
  };
};

export const setAllPost = (posts: Array<Post>): SetAllPost => {
  console.log("here.........");
  return {
    type: SET_ALL_POST,
    payload: posts
  };
};

export const createPost = (post: Post) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/users")
    //     .then(res => dispatch(setAllPost(res.data)))
    //     .catch(err => console.log(err));
    // };

    dispatch(setPost(post));
  };
};

export const getAllPost = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    console.log("calllled.......");
    dispatch(setAllPost(mockPost.posts));
  };
};
export const getSinglePost = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>) => {};
};
