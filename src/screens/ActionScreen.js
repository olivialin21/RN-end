import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';
import * as Location from 'expo-location';
import { Box, VStack, HStack, Center, Text, Pressable, Image } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { calcDistance, setBikeRealTimeData } from "../redux/actions/mapActions";
import { setStarList } from "../redux/actions/starActions";
import { set } from 'react-native-reanimated';

const ActionScreen = ({ onClose, station, method }) => {
   const dispatch = useDispatch();
   const { colors, fontSizes } = useTheme();
   const [ star, setStar ] = useState(false);
   const [ realTimeData, setRealTimeData ] = useState({});
   const [ dis, setDis ] = useState(0);
   const starList = useSelector((state) => (state.star.starList));

   const {
      StationUID,
      StationName,
      StationAddress,
      StationPosition,
      ServiceType,
      UpdateTime,
      ar,
      bemp,
   } = station;
   
   const getData = async () => {
      let data = await dispatch(setBikeRealTimeData(station));
      setRealTimeData(...data);
   }
   
   const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let locationNow = location.coords
      let distance = await dispatch(calcDistance(locationNow,StationPosition));
      setDis(distance);
    };
  

   useEffect (() => {
      if (starList.includes(station)) {
         setStar(true);
       } else {
         setStar(false);
       }
      getData();
      getLocation();
   },[])

   useEffect (() => {
     if (starList.includes(station)) {
       setStar(true);
     } else {
       setStar(false);
     }
   },[starList])

   return (
      <VStack h="20%" w="100%" py={3} _dark={{ bg: "black" }} _light={{ bg: "white" }} borderRadius={20} >
         <Box borderBottomColor={"white"} w={"15%"} h={1} borderRadius={3} bg="#666666" alignSelf="center"></Box>
         <HStack mt={3}>
            <Pressable
               mt={0.5}
               paddingLeft={6}
               onPress={() => {
                  if (starList.includes(station)) {
                     dispatch(setStarList(station,"remove"))
                     setStar(false);
                  } else {
                     dispatch(setStarList(station,"add"))
                     setStar(true);
                  }
               }}
            >
               <FontAwesomeIcon name="star" color={star == true ? "#F6C543" : "#666666"} size={20} />    
            </Pressable>
            <Box px={3} w="85%">
               <HStack
                  justifyContent="space-between"
                  mb={3}
               >
                  <Text fontSize="lg" fontWeight={'bold'}>
                     {StationName.Zh_tw.slice(11)}
                  </Text>
                  <HStack
                     alignItems="center"
                  >
                     <Image source={require('../images/icon_distance.png')} />
                     <Text>{dis}m</Text>
                  </HStack>
               </HStack>
               <HStack
                  justifyContent="space-between"
               >
                  {method == "rent" ? 
                     <HStack>
                        <Image
                           marginRight={2}
                           alt="icon_rent"
                           source={ServiceType == 1 ? require('../images/icon_rent1.png') : require('../images/icon_rent2.png')}
                        />
                        <Text>
                           {realTimeData.AvailableRentBikes}
                        </Text>
                     </HStack> :
                     <HStack>
                        <Image
                           marginRight={2}
                           alt="icon_return"
                           source={ServiceType == 1 ? require('../images/icon_return1.png') : require('../images/icon_return2.png')}
                        />
                        <Text>
                           {realTimeData.AvailableReturnBikes}
                        </Text>
                     </HStack>
                  }
                  <Text textAlign="right" fontSize={12}>{StationAddress.Zh_tw}</Text>
               </HStack>
            </Box>
         </HStack>
      </VStack>
   );
};

export default ActionScreen;
