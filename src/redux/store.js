import {configureStore} from '@reduxjs/toolkit'
import {postReducers} from "./reducers/postsReducers";
import {displayTypeReducers} from "./reducers/displayTypeReducers";
import thunk from "redux-thunk";

const reducer = {
  posts: postReducers,
  displayType: displayTypeReducers
}

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

