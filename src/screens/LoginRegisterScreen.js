import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pressable, Text, Box, Input, HStack, Image } from "native-base";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { setLogin } from "../redux/actions/accountActions"
import { useTheme } from '@react-navigation/native';

const LoginRegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const hasLogin = useSelector((state) => (state.account.hasLogin));
  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="#F6C543"
    >
      <Image
        source={require('../images/img_bg.png')}
        position="absolute"
        flex={1}
        resizeMode= "cover"
      />
      <Text mb={8} color="#fff" fontSize={32}>Login / Sign in</Text>
      <HStack mb={5}>
        <FontAwesomeIcon name="user" color="#fff" size={32} /><Input w="70%" ml={6}></Input>
      </HStack>
      <HStack>
        <FontAwesomeIcon name="lock" color="#fff" size={32} /><Input w="70%" ml={6}></Input>
      </HStack>
      <Pressable
        mt={6}
        onPress={() => {
          dispatch(setLogin());
          console.log(hasLogin)
        }}
      >
        <Text fontSize={20} color="white">Guest Login➔</Text>
      </Pressable>
    </Box>
  );
};

export default LoginRegisterScreen;