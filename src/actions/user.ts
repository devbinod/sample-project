import axios from "axios";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { User } from "../reducers/types/user";

export const SET_ALL_USER = "@users/GET_ALL_USER";

export const SET_SINGLE_USER = "@users/GET_SINGLE_USER";

export type SetAllUser = {
  type: typeof SET_ALL_USER;
  payload: Array<User>;
};

export type SetSingleUser = {
  type: typeof SET_SINGLE_USER;
  paylaod: User;
};

export const setAllUser = (userList: Array<User>): SetAllUser => {
  return {
    type: SET_ALL_USER,
    payload: userList
  };
};

export const setSingleUser = (user: User): SetSingleUser => {
  return {
    type: SET_SINGLE_USER,
    paylaod: user
  };
};

export const getAllUsers = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => dispatch(setAllUser(res.data)))
      .catch(err => console.log(err));
  };
};

export const getSingleUser = (userId: number) => {
  return async (dispatch: Dispatch<AnyAction>) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => {
        dispatch(setSingleUser(res.data));
      })
      .catch(err => console.log(err));
  };
};
