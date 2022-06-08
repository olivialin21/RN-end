import React from "react";
import MapView, { Marker, Circle } from 'react-native-maps';
import { Box, Image, useColorMode } from "native-base";

const StarMapScreen = ({ route }) => {
  const {colorMode} =useColorMode()
  const { 
    PositionLat,
    PositionLon
  } = route.params.StationPosition;
  return (
    <Box flex={1}>
      <MapView
        showsUserLocation={true}
        initialRegion={{
          longitude: PositionLat,
          latitude: PositionLon,
          longitudeDelta: 1,
          latitudeDelta: 1,
        }}
        animateToRegion
        flex={1}
        mapType="mutedStandard"
        userInterfaceStyle={colorMode == "light" ? "light" : "dark"}
      >
        <Marker
          coordinate={{
            latitude: PositionLat,
            longitude: PositionLon
          }}
          key={1}
        >
          <Image
            alt="bikeIcon"
            source={route.ServiceType == 1 ? require("../images/btn_1.png") : require("../images/btn_2.png")}
            style={{ width: 36, height: 36 , marginBottom: 14 }}
            resizeMode="contain"
          />
        </Marker>
      </MapView>
    </Box>
  );
};

export default StarMapScreen;