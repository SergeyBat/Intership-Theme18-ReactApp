import {CHANGE_DISPLAY} from "../types";

const initialState = {
  display: "Tile"
}

export const displayTypeReducers = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY:
      return {...state, display: action.display}
    default:
      return state
  }
}