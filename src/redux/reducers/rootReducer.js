import {combineReducers} from "redux";
import {postReducers} from "./postsReducers";

export const rootReducer = combineReducers({
  posts: postReducers
})