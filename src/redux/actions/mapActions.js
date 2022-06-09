import {
  SET_REGION,
  SET_BIKE_STATIONS
} from "../constants";

import {
  getBikeStations,
  getRealTimeData
} from "../api"

export const setRegion = (region) => async (dispatch) => {
  dispatch({
    type: SET_REGION,
    payload: region
  })
}

export const setBikeStations = (location, filter) => async (dispatch) => {
  let bikeStations = await getBikeStations(location, filter);
  dispatch({
    type: SET_BIKE_STATIONS,
    payload: bikeStations.data
  })
}

export const setBikeRealTimeData = (location) => async (dispatch) => {
  let bikeRealTimeData = await getRealTimeData(location.StationID);
  let data = bikeRealTimeData.data;
  return (data);
}

export const calcDistance = (currentLocation, location) => async (dispatch) => {
  var lat = [currentLocation.latitude, location.PositionLat]
  var lng = [currentLocation.longitude, location.PositionLon] 
  var R = 6378137;
  var dLat = (lat[1] - lat[0]) * Math.PI / 180;
  var dLng = (lng[1] - lng[0]) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return Math.round(d);
}