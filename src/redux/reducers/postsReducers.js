import {ADD_ITEM_MY_LIST, DEL_ITEM_MY_LIST, FETCH_REPOSITORIES} from "../types";

const initialState = {
  fetchedPosts: [],
  myListPosts: []
}

export const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      action.payload.map((e) => {
        if (state.myListPosts.find(el => {
          if (el.id === e.id) {
            return true
          }
        })) {
          e.dataActivity = 'true'
        } else {
          e.dataActivity = 'false'
        }
      })
      return {...state, fetchedPosts: action.payload}
    case ADD_ITEM_MY_LIST:
      action.payload.dataActivity = 'true'
      return {...state, myListPosts: [...state.myListPosts, action.payload]}
    case DEL_ITEM_MY_LIST:
      return {...state, myListPosts: action.payload}
    default:
      return state
  }
}
