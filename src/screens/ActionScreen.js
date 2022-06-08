import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';
import { Box, VStack, HStack, Center, Text, Pressable } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { setStarList } from "../redux/actions/starActions";

const ActionScreen = ({ onClose, station }) => {
   const dispatch = useDispatch();
   const { colors, fontSizes } = useTheme();
   const [ star, setStar ] = useState(false);
   const starList = useSelector((state) => (state.star.starList));

   const {
      StationUID,
      StationName,
      StationAddress,
      UpdateTime,
      ar,
      bemp,
   } = station;

   const getTime = (m) => {
      const mday = String(m);
      const year = mday.slice(0, 4);
      const month = Number(mday.slice(5, 7));
      const date = Number(mday.slice(8, 10));
      const hour = Number(mday.slice(11, 13));
      const min = Number(mday.slice(14, 16));
      const sec = Number(mday.slice(17,19));
      const time = `${year}/${month}/${date} ${hour}:${min}:${sec}`;
      return time;
   }
   
   useEffect (() => {
     if (starList.includes(station)) {
       setStar(true);
     } else {
       setStar(false);
     }
   },[starList])

   return (
      <VStack h="25%" w="100%" py={3} _dark={{ bg: "black" }} _light={{ bg: "white" }} borderRadius={20} >
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
            <Box px={3} >
               <Text fontSize="lg" fontWeight={'bold'} mb={5} textAlign="left">
                  {StationName.Zh_tw.slice()}
               </Text>
               <Text><Text fontWeight={'bold'}>地址：</Text>{StationAddress.Zh_tw}</Text>
               <Text mt={2}><Text fontWeight={'bold'}>更新時間：</Text>{getTime(UpdateTime)}</Text>
               <Center>
                  可借、可還
               </Center>
            </Box>
         </HStack>
      </VStack>
   );
};

export default ActionScreen;
