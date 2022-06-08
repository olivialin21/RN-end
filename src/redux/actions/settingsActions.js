import {
  SET_COLOR_MODE,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
  SET_LANGUAGE,
} from "../constants";

export const setColorMode = (colorMode) => async (dispatch) => {
  dispatch({
    type: SET_COLOR_MODE,
    payload: colorMode,
  });
};

export const setSearchFilter = (item ,method) => async (dispatch) => {
  if (method) {
    dispatch({
      type: ADD_SEARCH_FILTER,
      payload: item,
    });
  } else{
    dispatch({
      type: REMOVE_SEARCH_FILTER,
      payload: item,
    });
  }
}

export const setLanguage = (language) => async (dispatch) => {
  language = language ? "en" : "cn";
  dispatch({
    type: SET_LANGUAGE,
    payload: language,
  });
}