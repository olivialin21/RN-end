import React from "react";
import { Image, Box, Text, HStack, VStack, Pressable } from "native-base";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useTheme } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { setStarList } from '../redux/actions/starActions'

const StarItem = ({ data, navigation }) => {
  const dispatch = useDispatch();
  const { colors, fontSizes } = useTheme();

  const onRemoveStar = (data) => {
    dispatch(setStarList(data,"remove"))
  }

  return (
    <Pressable 
      onPress={() => {
        navigation.navigate('StarMap', data)}
      }
    >
      <HStack
        paddingTop={4}
        px="3"
      >
        <Pressable
          paddingTop={0.5}
          onPress={() => onRemoveStar(data)}
        >
          <FontAwesomeIcon name="star" color={colors.yellow2} size={20} />    
        </Pressable>
        <Box flex={1} marginLeft={2}>
          <HStack
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={fontSizes.body1}>{data.StationName.Zh_tw}</Text>
            <Text fontSize={fontSizes.body1}>{data.Distance}m</Text>
          </HStack>
          <HStack 
            justifyContent={"space-between"}
            alignItems={"flex-end"}
          >
            <HStack
              marginTop={1}
              alignItems={"center"}
            >
              <HStack
                width={16}
                alignItems={"center"}
              >
                <Image
                  marginRight={2}
                  alt="icon_rent"
                  source={data.ServiceType == 1 ? require('../images/icon_rent1.png') : require('../images/icon_rent2.png')}
                />
                <Text fontSize={fontSizes.body1}>{data.AvailableRentBikes}</Text>
              </HStack>
              <HStack
                width={16}
                alignItems={"center"}
              >
                <Image
                  marginRight={2}
                  alt="icon_return"
                  source={data.ServiceType == 1 ? require('../images/icon_return1.png') : require('../images/icon_return2.png')}
                />
                <Text fontSize={fontSizes.body1}>{data.AvailableReturnBikes}</Text>
              </HStack>
            </HStack>
            <AntDesign name="right" color={colors.gray1} size={20} />
          </HStack>
        </Box>
      </HStack>
    </Pressable>
  );
};

export default StarItem;
