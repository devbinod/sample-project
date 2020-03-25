import { User } from "./types/user";
import { AnyAction } from "redux";
import { SET_ALL_USER } from "../actions/user";

type InitialState = {
  userList: Array<User>;
};

const initialState: InitialState = {
  userList: []
};

export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ALL_USER: {
      return { ...state, userList: action.payload };
    }

    default:
      return initialState;
  }
};
