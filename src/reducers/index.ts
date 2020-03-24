import { combineReducers } from "redux";

import { userReducer as user } from "./user";

const rootReducer = combineReducers({ user });

export default rootReducer;
