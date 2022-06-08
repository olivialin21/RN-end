import {
  REMOVE_STAR,
  SET_STAR_SCREEN,
  ADD_STAR
} from "../constants";

export const setStarList = (starItem, method) => async (dispatch) => {
  if (method=="remove") {
    dispatch({
      type: REMOVE_STAR,
      payload: starItem.StationUID
    })
  } else if (method=="add") {
    dispatch({
      type: ADD_STAR,
      payload: starItem
    })
  }
}

export const setStarScreen = () => async (dispatch) => {
  dispatch({
    type: SET_STAR_SCREEN,
  })
}