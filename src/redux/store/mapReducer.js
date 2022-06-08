import {
  SET_REGION,
  SET_BIKE_STATIONS
} from "../constants";

const initialState = {
  bikeStations: [],
  region: {
    longitude: 121.544637,
    latitude: 25.024624,
    longitudeDelta: 0.01,
    latitudeDelta: 0.02,
  }
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        region: { ...action.payload }
      }
    case SET_BIKE_STATIONS:
      return {
        ...state,
        bikeStations: action.payload
      }
    default:
      return state;
  }
}
