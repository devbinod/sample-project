import { combineReducers } from "redux";

import { userReducer as user } from "./user";
import { postReducer as post } from "./post";

const rootReducer = combineReducers({ user, post });

export default rootReducer;
