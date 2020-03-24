import { User } from "./types/user";
import { AnyAction } from "redux";
import { SET_ALL_USER } from "../actions/user";

type InitialState = {
  usersList: Array<User>;
};

const initialState: InitialState = {
  usersList: []
};

export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_ALL_USER: {
      return { ...state, usersList: action.payload };
    }

    default:
      return initialState;
  }
};
