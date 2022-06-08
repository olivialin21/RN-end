import {
  REMOVE_STAR,
  SET_STAR_SCREEN,
  ADD_STAR
} from "../constants";
import StarData from "../../json/starList.json"

const initialState = {
  starList: []
};
let StarList = [];

export const starReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STAR_SCREEN:
      return state;
    case REMOVE_STAR:
      StarList = state.starList.filter((x) => x.StationUID !== action.payload);
      return {
        ...state,
        starList: StarList,
      };
    case ADD_STAR:
      StarList = [ ...state.starList, action.payload ]
      return {
        ...state,
        starList: StarList,
      };
    default:
      return state;
  }
}
