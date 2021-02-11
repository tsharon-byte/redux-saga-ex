import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";

export const mainReducer = combineReducers({ auth: authReducer });
