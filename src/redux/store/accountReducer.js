import { SET_GENERAL_ACCOUNT_INFO, SET_LOGIN } from "../constants";

const initialState = {
  general: {
    name: "",
    email: "",
    adrs: "",
    tel: ""
  },
  hasLogin: false
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENERAL_ACCOUNT_INFO:
      return { ...state, general: { ...action.payload } };
    case SET_LOGIN:
      return { ...state, hasLogin: true };
    default:
      return state;
  }
  
}
