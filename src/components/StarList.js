import React, { useCallback, useState } from "react";
import { FlatList } from "native-base";
import { RefreshControl } from "react-native";
import StarItem from "./StarItem";

const StarList = ({ list, navigation }) => {
  const renderItem = ({ item }) => <StarItem data={item} navigation={navigation} />;
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.StationUID}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    />    
  );  
}

export default StarList;

