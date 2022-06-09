import { SET_GENERAL_ACCOUNT_INFO, SET_LOGIN } from "../constants";

export const setGeneralAccountInfo = (info) => (dispatch) => {
  dispatch({
    type: SET_GENERAL_ACCOUNT_INFO,
    payload: info,
  });
};

export const setLogin = () => (dispatch) => {
  dispatch({
    type: SET_LOGIN
  });
};
