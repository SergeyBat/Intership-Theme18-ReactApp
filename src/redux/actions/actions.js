import {ADD_ITEM_MY_LIST, CHANGE_DISPLAY, DEL_ITEM_MY_LIST, FETCH_REPOSITORIES} from "../types";
import getRepositories from "../../services/getRepositories";

export function changeDisplayType(newTypeDisplay) {
  return {
    type: CHANGE_DISPLAY,
    display: newTypeDisplay
  }
}

export function fetchPosts(dataRequest) {
  return async dispatch => {
    const response = await getRepositories(dataRequest);
    dispatch({
      type: FETCH_REPOSITORIES,
      payload: response
    })
  }
}

export function addItemOnMyList(payload) {
  return ({
    type: ADD_ITEM_MY_LIST,
    payload
  })
}

export function delItemOnMyList(payload) {
  return {
    type: DEL_ITEM_MY_LIST,
    payload
  }
}