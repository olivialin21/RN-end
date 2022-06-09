import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { useTheme } from '@react-navigation/native';
import { useColorMode, HStack, Text, Box, Image, Pressable } from "native-base";
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Device from "expo-device";
import { useDispatch, useSelector } from "react-redux";
import { setBikeStations, setRegion } from "../redux/actions/mapActions";
import { Icon } from 'react-native-elements'
import ActionButton from '../components/ActionButton';
import Search from '../components/Search';

const Map = ({ method }) => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const { colors, fontSizes } = useTheme();

  const filter = useSelector((state) => (state.settings.search.filter));
  const bikeStations = useSelector((state) => (state.map.bikeStations));
  const region = useSelector((state) => (state.map.region));

  const [regionNow, setRegionNow] = useState(region);
  const [onCurrentLocation, setOnCurrentLocation] = useState(false);
  const [zoomRatio, setZoomRatio] = useState(1);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setMsg('Permission to access location was denied');
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    let locationAdd = {...location.coords, latitudeDelta: 0.005,longitudeDelta: 0.005}
    dispatch(setRegion(locationAdd));
    setOnCurrentLocation(true);
  };

  const onRegionChangeComplete = (rgn) => {
    if (
      Math.abs(rgn.latitude - region.latitude) > 0.0002 ||
      Math.abs(rgn.longitude - region.longitude) > 0.0002
    ) {
      dispatch(setRegion(rgn));
      setOnCurrentLocation(false);
    }
  }

  useEffect (() => {
    if (Platform.OS === "android" && !Device.isDevice) {
      setMsg(
         "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
      return
    }
    getLocation();
  
    dispatch(setRegion(region));
    dispatch(setBikeStations(region,filter))
  },[])
  
  useEffect (() => {
    setRegionNow(region);
    dispatch(setBikeStations(region,filter))
  },[region])
  
  return (
    <Box flex={1}>
      <Search/>
      <MapView
        showsUserLocation={true}
        initialRegion={{
          longitude: 121.544637,
          latitude: 25.024624,
          longitudeDelta: 0.01,
          latitudeDelta: 0.02,
        }}
        region={regionNow}
        flex={1}
        mapType="mutedStandard"
        // provider="google"
        userInterfaceStyle={colorMode == "light" ? "light" : "dark"}
        onRegionChangeComplete={onRegionChangeComplete}
      >
        <Circle
          center={region}
          radius={250}
          strokeColor={colorMode == "light" ? colors.gray2 : "white"}
        />
        {/* <Marker
          coordinate={{
            latitude: marker.coord.latitude,
            longitude: marker.coord.longitude
          }}
          key={1}
          title="aa"
          description="aaa"
        >
        </Marker> */}
        {(zoomRatio > 0.14) && bikeStations.map((station) => (
          <Marker
            coordinate={{
              latitude: Number(station.StationPosition.PositionLat),
              longitude: Number(station.StationPosition.PositionLon),
            }}
            key={station.StationPosition.StationUID}
            // onPress={() => {
            //   toggleDetail(true);
            //   setStationDetail(station);
            //   let locationAdd = {latitude:station.StationPosition.PositionLat, longitude:station.StationPosition.PositionLon , latitudeDelta: 0.005,longitudeDelta: 0.005}
            //   dispatch(setRegion(locationAdd));
            // }}
          >
            <ActionButton zoomRatio={zoomRatio} station={station} method={method}/>
          </Marker>
        ))}
      </MapView>
      {!onCurrentLocation && (
        <Icon
          raised
          name="ios-locate"
          type="ionicon"
          color="black"
          containerStyle={{
            backgroundColor: colors.yellow2,
            position: "absolute",
            right: 20,
            bottom: 40,
          }}
          onPress={getLocation}
        />
      )}
    </Box>
  );
};

export default Map;