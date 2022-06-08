import React from "react";
import { FlatList } from "native-base";
import StarItem from "./StarItem";

const StarList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <StarItem data={item} navigation={navigation} />;
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.StationUID}
    />    
  );  
}

export default StarList;

