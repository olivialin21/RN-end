import {
  SET_COLOR_MODE,
  ADD_SEARCH_FILTER,
  REMOVE_SEARCH_FILTER,
  SET_LANGUAGE
} from "../constants";

const initialState = {
  display: {
    colorMode: 'light'
  },
  search: {
    filter: ["Youbike 1.0","Youbike 2.0","can't use"],  
  },
  language: "cn",
};
let searchFilterList = [];

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR_MODE:
      return {
        ...state,
        display: {
          colorMode: action.payload
        }
      };
    case ADD_SEARCH_FILTER:
      searchFilterList = [...state.search.filter, action.payload]
      return {
        ...state,
        search: {
          filter: searchFilterList
        }
      };
    case REMOVE_SEARCH_FILTER:
      console.log(state.search.filter)
      searchFilterList = state.search.filter.filter((x) => x !== action.payload);
      return {
        ...state,
        search: {
          filter: searchFilterList
        }
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      }
    default:
      return state;
  }
}
