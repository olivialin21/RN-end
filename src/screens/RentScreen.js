import React from "react";
import Map from "../components/Map"
import Search from "../components/Search"
import { Box } from "native-base";

const RentScreen = ({ navigation }) => {
  return (
    <Box flex={1}>
      <Map method="rent"/>
    </Box>
  );
};

export default RentScreen;